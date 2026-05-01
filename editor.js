// ===================================
// MONACO EDITOR + C# SIMÜLATÖR
// ===================================

let monacoEditor = null;
let editorReady = false;

function initMonaco(starterCode) {
  return new Promise((resolve) => {
    if (typeof monaco !== "undefined") {
      setupEditor(starterCode);
      resolve();
      return;
    }

    require.config({
      paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs",
      },
    });

    require(["vs/editor/editor.main"], function () {
      // C# tema tanımı
      monaco.editor.defineTheme("csharpDark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "keyword", foreground: "c792ea", fontStyle: "bold" },
          { token: "string", foreground: "c3e88d" },
          { token: "number", foreground: "f78c6c" },
          { token: "comment", foreground: "546e7a", fontStyle: "italic" },
          { token: "type", foreground: "ffcb6b" },
          { token: "class", foreground: "ffcb6b" },
          { token: "identifier", foreground: "eeffff" },
        ],
        colors: {
          "editor.background": "#07070f",
          "editor.foreground": "#eeffff",
          "editor.lineHighlightBackground": "#0d0d1e",
          "editorLineNumber.foreground": "#2d2d5e",
          "editorLineNumber.activeForeground": "#7c3aed",
          "editor.selectionBackground": "#3d2080",
          "editorCursor.foreground": "#c792ea",
          "editorIndentGuide.background": "#1a1a35",
          "editorBracketMatch.background": "#3d2080",
          "editor.findMatchBackground": "#3d2080",
        },
      });

      setupEditor(starterCode);
      resolve();
    });
  });
}

function setupEditor(starterCode) {
  const container = document.getElementById("monaco-container");
  if (!container) return;

  if (monacoEditor) {
    monacoEditor.dispose();
    monacoEditor = null;
  }

  monacoEditor = monaco.editor.create(container, {
    value: starterCode || "// C# kodunuzu buraya yazın\n",
    language: "csharp",
    theme: "csharpDark",
    fontSize: 14,
    fontFamily: "'Fira Code', monospace",
    fontLigatures: true,
    minimap: { enabled: false },
    lineNumbers: "on",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    padding: { top: 12, bottom: 12 },
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
    wordWrap: "on",
    cursorBlinking: "smooth",
    cursorSmoothCaretAnimation: "on",
    smoothScrolling: true,
    tabSize: 4,
    insertSpaces: true,
    bracketPairColorization: { enabled: true },
    renderLineHighlight: "gutter",
    occurrencesHighlight: true,
    parameterHints: { enabled: true },
    folding: true,
    glyphMargin: false,
    lineDecorationsWidth: 8,
  });

  editorReady = true;
}

function getEditorCode() {
  if (!monacoEditor) return "";
  return monacoEditor.getValue();
}

function setEditorCode(code) {
  if (!monacoEditor) return;
  monacoEditor.setValue(code);
}

// ===================================
// C# KOD SİMÜLATÖRÜ
// ===================================

function runCSharpCode(code) {
  const outputEl = document.getElementById("output-txt");
  outputEl.className = "dim";
  outputEl.textContent = "⏳ Derleniyor...";

  setTimeout(() => {
    try {
      const result = simulateCSharp(code);
      if (result.error) {
        outputEl.className = "err";
        outputEl.textContent = "❌ Hata: " + result.error;
      } else {
        outputEl.className = "";
        outputEl.textContent = result.output || "(Çıktı yok)";
      }
    } catch (e) {
      outputEl.className = "err";
      outputEl.textContent = "❌ Beklenmeyen hata: " + e.message;
    }
  }, 400);
}

function simulateCSharp(code) {
  const lines = [];

  // Sözdizimi hataları kontrol et
  const errors = checkSyntax(code);
  if (errors) return { error: errors };

  // Console.WriteLine çıktıları
  const writeLineRegex = /Console\.WriteLine\s*\((.*?)\)\s*;/g;
  const writeRegex = /Console\.Write\s*\((.*?)\)\s*;/g;

  // Değişkenleri parse et
  const vars = parseVariables(code);

  let match;

  // Console.WriteLine
  while ((match = writeLineRegex.exec(code)) !== null) {
    const expr = match[1].trim();
    const val = evaluateExpression(expr, vars);
    lines.push(val);
  }

  // Console.Write (satır sonu olmadan)
  while ((match = writeRegex.exec(code)) !== null) {
    const expr = match[1].trim();
    const val = evaluateExpression(expr, vars);
    if (lines.length > 0) {
      lines[lines.length - 1] += val;
    } else {
      lines.push(val);
    }
  }

  return { output: lines.join("\n") };
}

function checkSyntax(code) {
  // Temel sözdizimi kontrolleri
  const openBraces = (code.match(/\{/g) || []).length;
  const closeBraces = (code.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    return `Sözdizimi hatası: ${openBraces > closeBraces ? "Eksik }" : "Fazla }"} bulundu`;
  }

  const openParens = (code.match(/\(/g) || []).length;
  const closeParens = (code.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    return `Sözdizimi hatası: Parantezler eşleşmiyor`;
  }

  // Noktalı virgül (;) kontrolü
  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.length === 0 || line.startsWith("//")) continue;

    // Blok/tanım başlangıç ve bitişlerini yoksay
    if (
      line.endsWith("{") ||
      line.endsWith("}") ||
      line.startsWith("using ") ||
      line.startsWith("class ") ||
      line.startsWith("static ") ||
      line.startsWith("if") ||
      line.startsWith("else") ||
      line.startsWith("for") ||
      line.startsWith("while")
    )
      continue;

    // C#'ta normal ifadeler (atama, metot çağırma vb.) ';' ile bitmelidir
    if (
      line.includes("Console.") ||
      line.includes("=") ||
      line.includes("return") ||
      line.match(/^[a-zA-Z_]\w*\s*\(/)
    ) {
      if (!line.endsWith(";")) {
        return `Satır ${i + 1}: CS1002: ';' bekleniyor. (Hatalı kod: ${line})`;
      }
    }
  }

  return null;
}

function parseVariables(code) {
  const vars = {};

  // int
  const intRegex = /int\s+(\w+)\s*=\s*([\d\s\+\-\*\/\%\(\)]+);/g;
  let m;
  while ((m = intRegex.exec(code)) !== null) {
    try {
      vars[m[1]] = eval(m[2].trim());
    } catch (e) {}
  }

  // double / float
  const dblRegex = /(?:double|float)\s+(\w+)\s*=\s*([\d\s\+\-\*\/\.\(\)]+);/g;
  while ((m = dblRegex.exec(code)) !== null) {
    try {
      vars[m[1]] = parseFloat(eval(m[2].trim()));
    } catch (e) {}
  }

  // string
  const strRegex = /string\s+(\w+)\s*=\s*"([^"]*)"\s*;/g;
  while ((m = strRegex.exec(code)) !== null) {
    vars[m[1]] = m[2];
  }

  // bool
  const boolRegex = /bool\s+(\w+)\s*=\s*(true|false)\s*;/g;
  while ((m = boolRegex.exec(code)) !== null) {
    vars[m[1]] = m[2] === "true";
  }

  // var (string)
  const varStrRegex = /var\s+(\w+)\s*=\s*"([^"]*)"\s*;/g;
  while ((m = varStrRegex.exec(code)) !== null) {
    vars[m[1]] = m[2];
  }

  // var (number)
  const varNumRegex = /var\s+(\w+)\s*=\s*([\d\.]+)\s*;/g;
  while ((m = varNumRegex.exec(code)) !== null) {
    vars[m[1]] = parseFloat(m[2]);
  }

  return vars;
}

function evaluateExpression(expr, vars) {
  // String literal
  if (expr.startsWith('"') && expr.endsWith('"')) {
    return expr.slice(1, -1);
  }

  // String concatenation (+ ile birleştirilmiş ifadeler)
  if (expr.includes("+")) {
    return evaluateConcat(expr, vars);
  }

  // Değişken adı
  if (vars.hasOwnProperty(expr)) {
    return String(vars[expr]);
  }

  // Sayı ifadesi
  try {
    // Değişkenleri sayısal değerleriyle değiştir
    let evalExpr = expr;
    for (const [k, v] of Object.entries(vars)) {
      if (typeof v === "number") {
        evalExpr = evalExpr.replace(new RegExp(`\\b${k}\\b`, "g"), v);
      }
    }
    const result = eval(evalExpr);
    if (typeof result === "number") return String(result);
    if (typeof result === "boolean") return result ? "True" : "False";
  } catch (e) {}

  // Boş string
  if (expr === '""') return "";

  return expr;
}

function evaluateConcat(expr, vars) {
  // String concat parçalarını ayır
  const parts = splitConcatParts(expr);
  return parts
    .map((p) => {
      p = p.trim();
      if (p.startsWith('"') && p.endsWith('"')) return p.slice(1, -1);
      if (vars.hasOwnProperty(p)) return String(vars[p]);
      try {
        let evalP = p;
        for (const [k, v] of Object.entries(vars)) {
          if (typeof v === "number")
            evalP = evalP.replace(new RegExp(`\\b${k}\\b`, "g"), v);
        }
        const r = eval(evalP);
        if (r !== undefined) return String(r);
      } catch (e) {}
      return p;
    })
    .join("");
}

function splitConcatParts(expr) {
  const parts = [];
  let current = "";
  let inStr = false;
  let depth = 0;

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (ch === '"' && expr[i - 1] !== "\\") {
      inStr = !inStr;
      current += ch;
    } else if (!inStr && (ch === "(" || ch === "[")) {
      depth++;
      current += ch;
    } else if (!inStr && (ch === ")" || ch === "]")) {
      depth--;
      current += ch;
    } else if (!inStr && depth === 0 && ch === "+") {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}
