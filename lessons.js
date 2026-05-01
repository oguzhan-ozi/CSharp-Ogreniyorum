// ===================================
// CSHARP ÖĞRENME PLATFORMU - MASTERCLASS MÜFREDATI
// ===================================

const CURRICULUM = [
  {
    id: "bolum-1",
    title: "C# Dünyasına Giriş ve Temeller",
    icon: "🚀",
    color: "#7c3aed",
    lessons: [
      {
        id: "ders-1-1",
        title: "C# Nedir ve İlk Programımız",
        xp: 20,
        duration: "15 dk",
        content: {
          theory: `
            <h2>C# (C-Sharp) Dünyasına Hoş Geldiniz!</h2>
            <p>Bir dili öğrenmeden önce onun ne olduğunu ve neler yapabildiğini bilmek heyecan vericidir. <strong>C#</strong>, 2000'li yılların başında Microsoft tarafından geliştirilmiş, gücünü <strong>.NET</strong> (dot-net) platformundan alan modern ve güvenilir bir dildir.</p>
            
            <div class="info-box">
              <span class="info-icon">🎯</span>
              <div>
                <strong>C# ile Neler Yapabiliriz?</strong>
                <p>Neredeyse her şeyi! Web siteleri (ASP.NET), masaüstü programları, mobil uygulamalar (Xamarin/MAUI) ve en önemlisi <strong>Unity Oyun Motoru</strong> sayesinde harika 2D ve 3D oyunlar geliştirebilirsiniz.</p>
              </div>
            </div>

            <h3>Anatomi: "Merhaba Dünya"</h3>
            <p>Tüm yazılımcıların geleneği olan ilk programımıza bakalım. Bu kod bloğu, bilgisayar ekranına basit bir mesaj yazdırır:</p>
            
            <div class="code-ex">
<pre><code class="language-csharp">using System;

namespace IlkProgram
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Merhaba Dünya!");    
    }
  }
}</code></pre>
            </div>

            <h3>Satır Satır Türkçe Meali:</h3>
            <ul>
              <li><strong><code>using System;</code></strong> : "Hey bilgisayar, bana System kütüphanesini (alet çantasını) getir. Ekrana yazı yazdırmak gibi temel aletleri kullanacağım."</li>
              <li><strong><code>namespace IlkProgram</code></strong> : Kodlarımızın karışmaması için onları koyduğumuz devasa klasörün (projenin) adı.</li>
              <li><strong><code>class Program</code></strong> : C#'ta havada uçuşan komutlar yoktur. Her şey düzenli bir şekilde <strong>Sınıfların (class)</strong> içinde olmalıdır.</li>
              <li><strong><code>static void Main</code></strong> : Burası oyunun başlama noktasıdır (Start butonu). Program çalıştığında bilgisayar direkt olarak bu bloğu (süslü parantezlerin içini) arar ve okumaya başlar.</li>
            </ul>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Console.WriteLine() komutunu kullanarak ekrana adını yazdır.
        // İPUCU: Metinler (yazılar) her zaman çift tırnak ("") içinde olmalıdır!
        
    }
}`,
          task: "Ekrana kendi adınızı yazdırın.",
          expectedOutput: "",
          validation: (code) => code.includes('Console.WriteLine') && code.includes(';')
        },
        quiz: [
          { question: "Dünyanın en popüler oyun motorlarından biri olan ve C# dilini kullanan oyun motoru hangisidir?", options: ["Unreal Engine", "Godot", "Unity", "CryEngine"], correct: 2 },
          { question: "C# programlarının KESİNLİKLE çalışmaya başladığı (ilk okuduğu) ana metot hangisidir?", options: ["Start()", "Main()", "Init()", "Execute()"], correct: 1 },
          { question: "C# dilinde yazdığımız tüm kodlar (komutlar) HANGİ YAPININ İÇİNDE bulunmak zorundadır?", options: ["Klasörlerin", "Metotların", "Değişkenlerin", "Sınıfların (Class)"], correct: 3 }
        ]
      },
      {
        id: "ders-1-2",
        title: "Çıktı Alma ve Kodlara Not Bırakma",
        xp: 25,
        duration: "10 dk",
        content: {
          theory: `
            <h2>Kullanıcıyla Konuşmak: Çıktı (Output)</h2>
            <p>Bilgisayarın arka planda yaptığı işlemleri ekranda görmek için çıktı komutlarını kullanırız. C#'ta bunun için iki komutumuz var:</p>

            <h3>1. Console.WriteLine()</h3>
            <p>İçindeki yazıyı ekrana yazar ve ardından <strong>Enter tuşuna basmış gibi</strong> imleci bir alt satıra geçirir.</p>

            <h3>2. Console.Write()</h3>
            <p>İçindeki yazıyı ekrana yazar ama alt satıra GEÇMEZ. Bir sonraki yazdırılan şey, hemen kaldığı yerden bitişik devam eder.</p>
            
            <div class="code-ex">
<pre><code class="language-csharp">Console.Write("Benim adım ");
Console.Write("Oğuzhan");
// Ekranda tek satırda görünür: Benim adım Oğuzhan</code></pre>
            </div>

            <h2>Geleceğe Notlar: Yorum Satırları (Comments)</h2>
            <p>Yazdığınız kodun aylar sonra bile ne işe yaradığını anlamak için (veya takım arkadaşlarınız için) kodların arasına notlar bırakabilirsiniz. Bilgisayar (Derleyici) bu notları tamamen görmezden gelir, çalıştırmaz.</p>
            
            <ul>
              <li><strong>Tek Satırlık Yorum:</strong> İki adet sağ eğik çizgi <code>//</code> ile başlar.</li>
              <li><strong>Çok Satırlı Yorum:</strong> Uzun bir paragraf yazacaksanız <code>/*</code> ile başlatıp <code>*/</code> ile bitirirsiniz.</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">// Bu işlemi toplam tutarı hesaplamak için yazdım
int x = 5;

/* 
  Bu kod bloğu veritabanına bağlanır.
  Eğer bağlantı koparsa hata fırlatır.
*/
Console.WriteLine(x);</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Console.Write() komutunu iki kez kullanarak 
        // ekrana yan yana "C# " ve "Harika" yazdırın.
        
    }
}`,
          task: "İki adet Console.Write() kullanarak 'C# Harika' çıktısını elde edin.",
          expectedOutput: "C# Harika",
          validation: (code) => code.match(/Console\.Write\s*\(/g) && code.match(/Console\.Write\s*\(/g).length >= 2
        },
        quiz: [
          { question: "Alt satıra GEÇMEDEN, kelimeleri yan yana yazdırmak için hangi komut kullanılır?", options: ["Console.Print()", "Console.Write()", "Console.WriteLine()", "Console.Log()"], correct: 1 },
          { question: "C#'ta bir kod satırının BAŞINA iki adet // (slash) koyarsak bilgisayar ne yapar?", options: ["Kodu iki kere çalıştırır", "Satırı hata olarak işaretler", "O satırı tamamen görmezden gelir (Yorum satırı)", "Alt satıra geçer"], correct: 2 }
        ]
      },
      {
        id: "ders-1-3",
        title: "Değişkenler: Veri Kutularımız",
        xp: 35,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Değişken (Variable) Nedir?</h2>
            <p>Değişkenleri, bilgisayarın hafızasındaki (RAM) <strong>etiketli kutular</strong> olarak düşünebilirsiniz. İçine bir değer koyarız ve ne zaman o değere ihtiyacımız olsa, kutunun etiketiyle (ismiyle) onu çağırırız.</p>
            
            <p>C# "Güçlü Tipli" (Strongly-Typed) bir dildir. Yani bir kutu yaratırken, <strong>o kutunun içine ne tür bir veri koyacağınızı önceden söylemek zorundasınız.</strong> Sayı kutusuna metin koyamazsınız!</p>
            
            <h3>En Çok Kullanılan 5 Veri Tipi</h3>
            <div class="op-table">
              <table>
                <tr><th>Veri Tipi</th><th>Açıklama</th><th>Örnek Kod</th></tr>
                <tr><td><code>int</code></td><td>Tam Sayılar (Küsüratsız)</td><td><code>int yas = 25;</code></td></tr>
                <tr><td><code>double</code></td><td>Ondalıklı Sayılar</td><td><code>double fiyat = 19.99;</code></td></tr>
                <tr><td><code>string</code></td><td>Metin / Yazı</td><td><code>string isim = "Ali";</code></td></tr>
                <tr><td><code>char</code></td><td>Tek Bir Karakter</td><td><code>char harf = 'A';</code></td></tr>
                <tr><td><code>bool</code></td><td>Doğru (true) veya Yanlış (false)</td><td><code>bool aktifMi = true;</code></td></tr>
              </table>
            </div>

            <div class="tip-box">
              <span>⚠️</span>
              <div>
                <strong>Yazım Kuralları (Syntax) Çok Önemlidir!</strong>
                <ul>
                  <li><code>string</code> değerler her zaman ÇİFT TIRNAK <code>" "</code> arasına yazılır.</li>
                  <li><code>char</code> değerler her zaman TEK TIRNAK <code>' '</code> arasına yazılır.</li>
                  <li>Sayısal değerlerde (<code>int</code>, <code>double</code>) tırnak <strong>KULLANILMAZ</strong>. Aksi halde bilgisayar onları matematiksel bir sayı olarak değil, normal bir yazı olarak algılar.</li>
                </ul>
              </div>
            </div>

            <h3>Birden Fazla Değişken Tanımlama</h3>
            <p>Aynı tipe sahip birden fazla değişkeni virgülle ayırarak tek satırda tanımlayabilirsiniz:</p>
            <p><code>int x = 5, y = 10, z = 15;</code></p>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: 
        // 1. "sehir" adında bir string oluşturup içine "İstanbul" yazın.
        // 2. "plaka" adında bir int oluşturup içine 34 değerini verin.
        // 3. Her iki değişkeni de Console.WriteLine ile alt alta yazdırın.
        
    }
}`,
          task: "Bir string ve bir int değişkeni tanımlayıp ekrana yazdırın.",
          expectedOutput: "İstanbul\n34",
          validation: (code) => code.includes('string') && code.includes('int') && code.includes('Console.WriteLine')
        },
        quiz: [
          { question: "Ondalıklı sayıları (örneğin 3.14) saklamak için en uygun veri tipi hangisidir?", options: ["int", "string", "double", "bool"], correct: 2 },
          { question: "C# dilinde 'char' tipinde bir değişken atarken hangi tırnak işareti kullanılır?", options: ["Hiçbiri", "Tek Tırnak (' ')", "Çift Tırnak (\" \")", "Süslü Parantez ({ })"], correct: 1 },
          { question: "Aşağıdaki değişken tanımlamalarından hangisi YANLIŞTIR?", options: ["int yas = 20;", "string isim = \"Ayşe\";", "bool acikMi = true;", "int puan = \"85\";"], correct: 3 }
        ]
      },
      {
        id: "ders-1-4",
        title: "Tip Dönüşümleri (Type Casting)",
        xp: 40,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Tip Dönüşümü (Type Casting) Neden Gereklidir?</h2>
            <p>Gerçek hayattaki projelerde veriler genellikle bizim istediğimiz formda gelmez. Örneğin internetten kullanıcının girdiği bir "yaş" bilgisi, sisteme sayı olarak değil, <strong>metin (string)</strong> olarak gelir. Bizim bu metni matematiksel işlem yapabilmek için <strong>tam sayıya (int)</strong> dönüştürmemiz gerekir.</p>

            <h3>1. Kapalı (Implicit) Dönüşüm (C# Bunu Kendi Yapar)</h3>
            <p>Küçük bir kutudaki eşyayı, büyük bir kutuya koymak gibidir. Veri kaybı riski olmadığı için C# arka planda bunu otomatik halleder.</p>
            <p>Örn: <code>int</code> -> <code>long</code> -> <code>float</code> -> <code>double</code></p>
            <div class="code-ex">
<pre><code class="language-csharp">int kucukKutu = 9;
// Int (4 byte) otomatik olarak Double (8 byte) oldu!
double buyukKutu = kucukKutu; 
Console.WriteLine(buyukKutu); // Çıktı: 9 (Ama hafızada 9.0)</code></pre>
            </div>

            <h3>2. Açık (Explicit) Dönüşüm (Sizin İzniniz Gerekir)</h3>
            <p>Büyük bir kutuyu, küçük bir kutuya sıkıştırmak gibidir. Küsüratlı kısımlar çöpe gidebileceği için (veri kaybı), C# sizden onay ister. Parantez içinde çevirmek istediğiniz tipi yazarsınız.</p>
            <div class="code-ex">
<pre><code class="language-csharp">double piSayisi = 3.14;
// double tipini zorla int tipine dönüştürüyoruz:
int tamSayiPi = (int) piSayisi; 
Console.WriteLine(tamSayiPi); // Çıktı: 3 (0.14 tamamen silindi!)</code></pre>
            </div>

            <h3>3. Convert Sınıfı (Farklı Dünyalar Arası Geçiş)</h3>
            <p>Tamamen alakasız tipleri dönüştürmek için (Metinden Sayıya gibi) C#'ın yerleşik <code>Convert</code> fabrikasını kullanırız.</p>
            <div class="code-ex">
<pre><code class="language-csharp">string yasMetni = "25";
// Metni aldık, matematiksel bir int sayıya çevirdik:
int yasSayisi = Convert.ToInt32(yasMetni); 

// Artık matematiksel işlem yapabiliriz:
Console.WriteLine(yasSayisi + 5); // Çıktı: 30</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string fiyatMetni = "150";
        // GÖREV: 'fiyatMetni' string değişkenini 'Convert.ToInt32()' kullanarak
        // bir int değişkene (fiyat) dönüştürün.
        // Daha sonra bu fiyata 50 ekleyip (fiyat + 50) ekrana yazdırın.
        
    }
}`,
          task: "Convert sınıfını kullanarak string'i int'e çevirin ve matematiksel işlem yapın.",
          expectedOutput: "200",
          validation: (code) => code.includes('Convert.ToInt32') && code.includes('+ 50')
        },
        quiz: [
          { question: "Ondalıklı bir sayıyı (double x = 9.99), tam sayıya (int) dönüştürmek için hangi yöntem kullanılır?", options: ["Convert.ToString(x)", "(int) x", "Otomatik (Implicit) dönüşür", "(string) x"], correct: 1 },
          { question: "\"10\" şeklinde string olan bir veriyi alıp, onunla matematik işlemi (10 + 5) yapabilmek için hangi metodu kullanmalıyız?", options: ["Convert.ToDouble()", "(int)", "Convert.ToInt32()", "Convert.ToString()"], correct: 2 },
          { question: "Explicit (Açık/Zorla) dönüştürmede (örneğin double'dan int'e), ondalıklı kısımlara ne olur?", options: ["Üste yuvarlanır", "Alta yuvarlanır", "Tamamen silinir (Veri kaybı yaşanır)", "Hata verir"], correct: 2 }
        ]
      },
      {
        id: "ders-1-5",
        title: "Kullanıcıyla Etkileşim ve Matematik",
        xp: 45,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Klavye Sesleri: Console.ReadLine()</h2>
            <p>Sürekli kendi yazdığımız verileri ekrana yazdırmak sıkıcıdır. Gerçek bir program, kullanıcısından veri bekler. Kullanıcının klavyeden yazdığı mesajı programın içine almak için <code>Console.ReadLine()</code> komutunu kullanırız.</p>
            
            <div class="info-box">
              <span class="info-icon">🔍</span>
              <div>
                <strong>Önemli Kural: Her Şey Metindir!</strong>
                <p>Kullanıcı klavyeden "45" sayısını girse bile, <code>Console.ReadLine()</code> bunu size <strong>"45" (String/Metin)</strong> olarak verir. Eğer kullanıcının girdiği sayıyla toplama/çıkarma yapmak istiyorsanız, bir önceki derste öğrendiğimiz <code>Convert.ToInt32()</code> işlemini uygulamalısınız.</p>
              </div>
            </div>

<div class="code-ex">
<pre><code class="language-csharp">Console.WriteLine("Lütfen yaşınızı girin:");
// Kullanıcı 20 yazıp Enter'a basarsa, "20" metni gelir, Convert onu 20 sayısına çevirir.
int yas = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Seneye yaşınız: " + (yas + 1));</code></pre>
</div>

            <h2>C# Math (Matematik Sınıfı)</h2>
            <p>C#, zorlu hesaplamalar için kendi içinde devasa bir hesap makinesi barındırır. Bu sınıfa <code>Math.</code> yazarak erişiriz.</p>
            <ul>
              <li><strong><code>Math.Max(x,y)</code></strong> : İki sayıdan hangisi BÜYÜKSE onu seçer.</li>
              <li><strong><code>Math.Min(x,y)</code></strong> : İki sayıdan hangisi KÜÇÜKSE onu seçer.</li>
              <li><strong><code>Math.Sqrt(x)</code></strong> : Bir sayının karekökünü (Square Root) hesaplar. <em>(Örn: Sqrt(64) sonucu 8'dir)</em></li>
              <li><strong><code>Math.Abs(x)</code></strong> : Mutlak değer. Negatif bir sayıyı her zaman pozitife çevirir. <em>(Örn: Abs(-5) sonucu 5'tir)</em></li>
              <li><strong><code>Math.Round(x)</code></strong> : Ondalıklı sayıyı en yakın tam sayıya yuvarlar. <em>(Örn: Round(9.99) sonucu 10'dur)</em></li>
            </ul>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Math sınıfını kullanarak:
        // 1. Ekrana 100 ve 250 sayılarından BÜYÜK olanı yazdırın (Math.Max).
        // 2. Alt satıra 81 sayısının karekökünü yazdırın (Math.Sqrt).
        
    }
}`,
          task: "Math sınıfını (Math.Max ve Math.Sqrt) kullanarak işlemleri ekrana yazdır.",
          expectedOutput: "250\n9",
          validation: (code) => code.includes('Math.Max') && code.includes('Math.Sqrt')
        },
        quiz: [
          { question: "Kullanıcının klavyeden yazdıklarını programın içine okumak için hangi komut kullanılır?", options: ["Console.Input()", "Console.ReadLine()", "Console.GetText()", "Math.Read()"], correct: 1 },
          { question: "Console.ReadLine() ile alınan veri, kullanıcının girdiği değer ne olursa olsun HANGİ TİPTE gelir?", options: ["int", "double", "string (Metin)", "Tip belirtmezsek hata verir"], correct: 2 },
          { question: "Negatif bir sayıyı her zaman pozitife dönüştüren (Mutlak Değer) Math metodu hangisidir?", options: ["Math.Min()", "Math.Round()", "Math.Positive()", "Math.Abs()"], correct: 3 }
        ]
      },
      {
        id: "ders-1-6",
        title: "Metinlerle Dans (Strings Detaylı)",
        xp: 50,
        duration: "20 dk",
        content: {
          theory: `
            <h2>String Metotları (Metin Operasyonları)</h2>
            <p>C#'ta metinler (Stringler) sadece yazılardan ibaret değildir. İçlerinde metinleri parçalamak, büyütmek, aramak için harika araçlar gizlidir.</p>

            <h3>1. Kaçış Karakterleri (Escape Characters)</h3>
            <p>Bir string'in içine çift tırnak (") yazmak isterseniz C# kodu bitirdiğinizi sanıp hata verir. Bu tür özel karakterleri koda <strong>Kaçış işareti (Ters Slash \\ )</strong> ile tanıtırız.</p>
            <ul>
              <li><code>\\"</code> : Ekrana çift tırnak yazdırır. <em>(Örn: "Oğuzhan \\"Harika\\" Dedi")</em></li>
              <li><code>\\n</code> : Yeni bir alt satıra geçer (New Line).</li>
              <li><code>\\t</code> : Bir tab (boşluk) kadar atlar.</li>
            </ul>

            <h3>2. Metin Birleştirme (String Interpolation)</h3>
            <p>Artı (<code>+</code>) işaretiyle kelimeleri bağlamak eskidendi. Modern C#'ta tırnağın en başına <strong><code>$</code></strong> işareti koyarak değişkenleri direkt süslü parantez <code>{}</code> içine gömebilirsiniz. Çok daha okunabilirdir!</p>
            <div class="code-ex">
<pre><code class="language-csharp">string ad = "John";
string soyad = "Wick";
// Eskiden: string tamIsim = ad + " " + soyad;
// Şimdi Şöyle Yapıyoruz:
string tamIsim = $"Ajanın adı {ad}, soyadı {soyad}.";</code></pre>
            </div>

            <h3>3. Metin Arama (IndexOf) ve Kesme (Substring)</h3>
            <p>Bir metnin içindeki spesifik bir harfi veya bölümü bulmak çok yaygın bir işlemdir. <strong>Unutmayın, bilgisayarlar her zaman harfleri saymaya 0'dan başlar!</strong></p>
            <div class="code-ex">
<pre><code class="language-csharp">string isim = "Alexander";
// 'x' harfinin kaçıncı sırada (index) olduğunu bul:
int pozisyon = isim.IndexOf("x"); 
Console.WriteLine(pozisyon); // Çıktı: 3 (A:0, l:1, e:2, x:3)

// 4. index'ten sonrasını KESİP (kopyalayıp) al:
string yeniIsim = isim.Substring(4);
Console.WriteLine(yeniIsim); // Çıktı: ander</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string takim = "Galatasaray";
        
        // GÖREV: 
        // 1. takim değişkeninin uzunluğunu bulun (.Length) ve yazdırın.
        // 2. takim değişkenini tamamen BÜYÜK harflere çevirip (.ToUpper()) yazdırın.
        
    }
}`,
          task: "String özelliklerini (Length ve ToUpper) kullanarak ekrana yazdır.",
          expectedOutput: "11\nGALATASARAY",
          validation: (code) => code.includes('.Length') && code.includes('.ToUpper()')
        },
        quiz: [
          { question: "Modern C#'ta değişkenleri metin içerisine gömmek için (String Interpolation) tırnağın başına hangi özel işaret konur?", options: ["@", "#", "$", "&"], correct: 2 },
          { question: "string deneme = \"Antigravity\"; kodu için deneme.IndexOf(\"g\") metodunun döndüreceği Index (Sıra Numarası) kaçtır?", options: ["3", "4", "5", "6"], correct: 1 },
          { question: "Bir string'in içinde yeni bir satıra geçmek (Enter'a basmış gibi yapmak) için hangi kaçış karakteri kullanılır?", options: ["\\r", "\\t", "\\n", "\\line"], correct: 2 }
        ]
      }
    ]
  },
  {
    id: "bolum-2",
    title: "Programın Akışını Kontrol Etmek",
    icon: "🔀",
    color: "#0891b2",
    lessons: [
      {
        id: "ders-2-1",
        title: "Karar Mekanizmaları: If - Else",
        xp: 40,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Gerçek Hayat Simülasyonu: If...Else</h2>
            <p>Programlar her zaman düz bir çizgi halinde çalışmaz. Sürekli kararlar almaları gerekir. "Eğer kullanıcı şifreyi doğru girdiyse paneli aç, yanlış girdiyse uyarı ver" gibi mekanizmaların temeli <strong>If-Else</strong> bloklarına dayanır.</p>

            <ul>
              <li><strong><code>if</code> (Eğer):</strong> Yanındaki parantezin içindeki koşul <code>true</code> (doğru) ise süslü parantezlerin <code>{}</code> içindeki kod çalışır.</li>
              <li><strong><code>else if</code> (Değilse Eğer):</strong> İlk 'if' başarısız olursa, test edilecek ikinci bir yedek plan/koşuldur.</li>
              <li><strong><code>else</code> (Değilse):</strong> Yukarıdaki hiçbir koşul doğru çıkmadıysa en son çare olarak kesinlikle bu blok çalışır.</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">int puan = 75;

if (puan >= 85) 
{
  Console.WriteLine("Harika, Takdir Belgesi!");
} 
else if (puan >= 70) 
{
  Console.WriteLine("Güzel, Teşekkür Belgesi.");
} 
else 
{
  Console.WriteLine("Maalesef belge alamadın.");
}
// Puan 75 olduğu için sadece else if bloğu çalışır ve program oradan çıkar.</code></pre>
            </div>

            <div class="tip-box">
              <span>🎯</span>
              <div>
                <strong>Kısa If-Else (Ternary Operator)</strong>
                <p>Çok basit sadece tek satırlık bir if-else atamanız varsa, bunu kısaltabilirsiniz: <code>(Koşul) ? Doğruysa_Ne_Olsun : Yanlışsa_Ne_Olsun;</code></p>
                <p><code>string durum = (puan >= 50) ? "Geçti" : "Kaldı";</code></p>
              </div>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        int yas = 15;
        // GÖREV: Eğer yas 18'den küçükse "Çocuk", 
        // büyük veya eşitse "Yetişkin" yazdıracak if-else yapısını kur.
        
    }
}`,
          task: "if-else yapısı ile yaş kontrolü yapın.",
          expectedOutput: "Çocuk",
          validation: (code) => code.includes('if') && code.includes('else')
        },
        quiz: [
          { question: "Eğer ilk if koşulu yanlış (False) çıkarsa ve bizim kontrol etmek istediğimiz BİR KOŞUL DAHA varsa ne kullanmalıyız?", options: ["else", "else if", "switch", "then"], correct: 1 },
          { question: "if (10 == 10) ifadesinde == operatörü ne anlama gelir?", options: ["10 değerini 10'a atar", "10, 10'dan büyüktür", "İki değerin birbirine tam olarak eşit olup olmadığını kontrol eder", "Hata verir"], correct: 2 },
          { question: "Ternary operatöründe (kısa if) DOĞRU ve YANLIŞ sonuç kısımlarını birbirinden ayıran sembol hangisidir?", options: ["?", ";", ":", ","], correct: 2 }
        ]
      },
      {
        id: "ders-2-2",
        title: "Çoklu Seçenekler: Switch - Case",
        xp: 40,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Switch - Case: Menü Seçimleri</h2>
            <p>Elinizde tek bir değişken var (örneğin kullanıcının girdiği menü numarası: 1, 2, 3...) ve bu değişkeni bir sürü farklı değere karşı test etmeniz gerekiyorsa, uzun bir <code>else if</code> zinciri yazmak kodu çok çirkinleştirir. Bunun yerine <strong>Switch</strong> kullanılır.</p>

            <div class="code-ex">
<pre><code class="language-csharp">int secim = 2;

switch (secim) 
{
  case 1:
    Console.WriteLine("Oyuna Başla");
    break;
  case 2:
    Console.WriteLine("Ayarlar Menüsü"); // secim 2 olduğu için burası çalışır
    break;
  case 3:
    Console.WriteLine("Çıkış Yap");
    break;
  default:
    // Yukarıdaki caselerden HİÇBİRİ eşleşmezse burası çalışır (else mantığı)
    Console.WriteLine("Hatalı bir tuşa bastınız.");
    break;
}</code></pre>
            </div>

            <div class="info-box">
              <span class="info-icon">⚠️</span>
              <div>
                <strong>Neden Break Koyuyoruz?</strong>
                <p>C# dilinde kurallar sıkıdır. Bir eşleşme (case) bulduğunda oradaki kodları çalıştırır. Eğer sonuna <code>break;</code> koymazsanız, "Ben işimi bitirdim, beni Switch'ten çıkar!" diyemezsiniz ve C# size derleme hatası (Syntax Error) verir.</p>
              </div>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string renk = "Kırmızı";
        // GÖREV: 'renk' değişkenini switch ile kontrol et.
        // case "Kırmızı": ekrana "Dur" yazsın.
        // case "Sarı": ekrana "Hazırlan" yazsın.
        // case "Yeşil": ekrana "Geç" yazsın.
        // Her case'in sonuna break; koymayı unutma!
        
    }
}`,
          task: "Switch-case ile renk kontrolü yapıp durumsal çıktıyı alın.",
          expectedOutput: "Dur",
          validation: (code) => code.includes('switch') && code.includes('case') && code.includes('break')
        },
        quiz: [
          { question: "C# Switch yapısında bir case bloğunun sonunda KESİNLİKLE bulunması gereken komut hangisidir?", options: ["continue;", "return;", "stop;", "break;"], correct: 3 },
          { question: "Switch içerisinde hiçbir case değerinin eşleşmemesi durumunda çalışacak 'varsayılan' bloğu belirten anahtar kelime hangisidir?", options: ["else", "default", "none", "catch"], correct: 1 },
          { question: "Switch ifadesinin parantezleri ( ) içerisine ne yazılır?", options: ["Bir koşul (Örn: x > 5)", "Test edilecek değişkenin kendisi", "Sadece sayılar", "Hiçbir şey"], correct: 1 }
        ]
      },
      {
        id: "ders-2-3",
        title: "Döngüler: While ve For",
        xp: 50,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Kodları Tekrar Ettirmek: Döngüler (Loops)</h2>
            <p>Ekrana 1'den 100'e kadar sayıları yazdırmak isteseydiniz 100 satır <code>Console.WriteLine</code> mı yazardınız? Tabii ki hayır! Döngüler, belirli bir koşul sağlandığı sürece verdiğiniz kod bloğunu ışık hızında tekrar tekrar çalıştırırlar.</p>

            <h3>1. While Döngüsü (Koşul Sağlandıkça Dön)</h3>
            <p>Parantez içindeki koşul <code>true</code> kaldığı sürece çalışır. <strong>En büyük tehlikesi "Sonsuz Döngü"dür.</strong> Eğer döngü içindeki sayacı artırmayı unutursanız, koşul hep doğru kalır ve program kilitlenip çöker!</p>
            <div class="code-ex">
<pre><code class="language-csharp">int i = 1;
while (i <= 5) 
{
  Console.WriteLine(i);
  i++; // i = i + 1 demektir. Bunu eklemezsek i hep 1 kalır, döngü sonsuza gider!
}</code></pre>
            </div>

            <h3>2. For Döngüsü (Planlı Döngü)</h3>
            <p>Kaç kere döneceğinizi TAM OLARAK bildiğinizde en iyi yöntem for döngüsüdür. Çünkü Sayaç, Koşul ve Artış miktarını tek satırda gözünüzün önünde toplar.</p>
            <div class="code-ex">
<pre><code class="language-csharp">// Adım 1: int x = 0 (Başlangıç Sayacı)
// Adım 2: x < 3 (Devam etme koşulu)
// Adım 3: x++ (Her turdan sonra ne olacak? 1 artacak)
for (int x = 0; x < 3; x++) 
{
  Console.WriteLine("Tur: " + x); 
  // Çıktı: Tur: 0, Tur: 1, Tur: 2
}</code></pre>
            </div>

            <h3>Döngüyü Kırmak: Break ve Continue</h3>
            <ul>
              <li><strong><code>break</code>:</strong> O an döngüyü tamamen ezer, bitirir ve dışarı atar. (Örn: Aradığınızı bulduğunuzda döngünün devam etmesine gerek yoktur).</li>
              <li><strong><code>continue</code>:</strong> Sadece o anki adımı (turu) atlar, döngü sonlanmaz, bir sonraki tur için başa döner.</li>
            </ul>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: for döngüsü kullanarak 1'den 5'e kadar (5 dahil) sayıları yazdır.
        
    }
}`,
          task: "For döngüsü kullanarak ekrana 1, 2, 3, 4, 5 yazdırın.",
          expectedOutput: "1\n2\n3\n4\n5",
          validation: (code) => code.includes('for') && code.includes('Console.WriteLine')
        },
        quiz: [
          { question: "While döngüsünde sayacı (i++) artırmayı unutursak ne yaşanır?", options: ["Syntax Hatası (Derlenmez)", "Sonsuz Döngüye Girer (Program kitlenir)", "Sadece 1 kez çalışıp durur", "Otomatik kendisi artırır"], correct: 1 },
          { question: "For döngüsünün içindeki 3 tanım (Başlangıç, Koşul, Artış) birbirinden HANGİ SEMBOL ile ayrılır?", options: [", (Virgül)", ": (İki Nokta)", "; (Noktalı Virgül)", ". (Nokta)"], correct: 2 },
          { question: "Döngünün sadece o anki adımını (turunu) atlayıp, bir sonraki adıma geçmesini (başa dönmesini) sağlayan komut nedir?", options: ["break", "stop", "pass", "continue"], correct: 3 }
        ]
      }
    ]
  },
  {
    id: "bolum-3",
    title: "Veri Yapıları ve Hata Yönetimi",
    icon: "📚",
    color: "#f43f5e",
    lessons: [
      {
        id: "ders-3-1",
        title: "Diziler (Arrays) ve Foreach",
        xp: 50,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Birden Fazla Veriyi Gruplamak: Diziler (Arrays)</h2>
            <p>100 tane araba ismini kaydetmek için 100 ayrı değişken (araba1, araba2...) açmak tam bir kabustur. Bunun yerine "Arabalar" adında bir <strong>Dizi (Array)</strong> oluşturup hepsini tek bir yerde gruplarız.</p>
            <p>Diziler oluşturulurken değişken tipinin yanına köşeli parantez <code>[]</code> eklenir.</p>

            <div class="code-ex">
<pre><code class="language-csharp">// String dizisi (Sadece metin alabilir)
string[] arabalar = {"Volvo", "BMW", "Ford", "Mazda"};

// Int dizisi (Sadece tam sayı alabilir)
int[] notlar = {85, 90, 100, 45};</code></pre>
            </div>

            <h3>Dizi Elemanlarına Ulaşmak (Index Mantığı)</h3>
            <p>Bilgisayar dizideki elemanları saymaya <strong>0'dan başlar!</strong> Yani ilk eleman 0. Index'tedir.</p>
            <div class="code-ex">
<pre><code class="language-csharp">string[] arabalar = {"Volvo", "BMW", "Ford"};
Console.WriteLine(arabalar[0]); // Çıktı: Volvo
Console.WriteLine(arabalar[1]); // Çıktı: BMW

// Eleman değiştirmek çok kolaydır:
arabalar[0] = "Opel"; </code></pre>
            </div>

            <h3>Foreach Döngüsü (Dizilerin En İyi Dostu)</h3>
            <p>Bir dizideki tüm elemanları tek tek okuyup ekrana yazdırmak için normal for döngüsü yerine, özellikle diziler için yaratılmış <strong><code>foreach</code></strong> (her biri için) döngüsünü kullanmak çok daha okunabilirdir.</p>
            <div class="code-ex">
<pre><code class="language-csharp">string[] meyveler = {"Elma", "Armut", "Muz"};

// Okunuşu: meyveler dizisindeki her bir (foreach) string öğe (m) için:
foreach (string m in meyveler) 
{
  Console.WriteLine(m);
}</code></pre>
            </div>

            <div class="tip-box">
              <span>💡</span>
              <p><strong>Array.Sort():</strong> Bir diziyi A'dan Z'ye veya küçükten büyüğe sıralamak isterseniz tek yapmanız gereken <code>Array.Sort(diziAdi);</code> yazmaktır.</p>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string[] arabalar = {"Volvo", "BMW", "Ford"};
        
        // GÖREV: foreach döngüsü kullanarak 'arabalar' dizisindeki
        // tüm elemanları alt alta ekrana yazdırın.
        
    }
}`,
          task: "Foreach döngüsü ile dizi elemanlarını ekrana yazdırın.",
          expectedOutput: "Volvo\nBMW\nFord",
          validation: (code) => code.includes('foreach') && code.includes('Console.WriteLine')
        },
        quiz: [
          { question: "C#'ta bir dizi oluştururken değişken tipinin yanına hangi işaretler konur?", options: ["()", "{}", "[]", "<>"], correct: 2 },
          { question: "string[] sehirler = {\"Ankara\", \"İstanbul\", \"İzmir\"}; dizisinden İstanbul'u ekrana yazdırmak için hangi kod kullanılır?", options: ["sehirler[0]", "sehirler[1]", "sehirler[2]", "sehirler[\"İstanbul\"]"], correct: 1 },
          { question: "Diziler koleksiyonlar içindeki tüm elemanları sırayla ve çok pratik bir şekilde dönmek için özel olarak yaratılmış döngü hangisidir?", options: ["for", "while", "do-while", "foreach"], correct: 3 }
        ]
      },
      {
        id: "ders-3-2",
        title: "Hata Yakalama (Try - Catch)",
        xp: 45,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Kusursuz Program Yoktur: Hataları Yönetmek</h2>
            <p>Kullanıcıdan bir yaş girmesini istediğinizi (int) ama kullanıcının "Yirmi" yazdığını hayal edin. Program bunu sayıya çeviremeyeceği için <strong>çöker!</strong> (Kapanır). Profesyonel uygulamalar çökmez, bunun yerine hatayı "yakalayıp" kullanıcıya düzgün bir mesaj gösterirler.</p>
            
            <p>Bunun için <strong><code>try...catch</code></strong> blokları kullanılır:</p>
            <ul>
              <li><strong><code>try</code> (Dene):</strong> Programın çökme ihtimali olan "riskli" kodları bu bloğun içine yazarız.</li>
              <li><strong><code>catch</code> (Yakala):</strong> Eğer try içindeki kodlarda bir hata çıkarsa, program çökmez, direkt olarak Catch bloğuna atlar. Burada hatayı loglayabilir veya kullanıcıya mesaj gösterebiliriz.</li>
              <li><strong><code>finally</code> (En Sonunda):</strong> Hata olsa da olmasa da, işin sonunda <strong>kesinlikle çalıştırılacak</strong> temizlik kodlarının yazıldığı yerdir (Örn: Veritabanı bağlantısını kapatmak).</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">try 
{
  int[] sayilar = {1, 2, 3}; // Dizi sadece 3 elemanlı! (Index: 0,1,2)
  Console.WriteLine(sayilar[10]); // Riskli Kod: 10. index YOK! Hata Fırlatır!
}
catch (Exception hata) 
{
  // Program çökmez, buraya düşer
  Console.WriteLine("Hata Yakalandı! Detay: " + hata.Message);
}
finally 
{
  Console.WriteLine("Bu işlem sona erdi.");
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Aşağıdaki riskli kodu bir try-catch bloğu içine alarak, 
        // programın çökmesini engelleyip ekrana "Hata tespit edildi" yazdırmasını sağlayın.
        
        int[] rakamlar = {1, 2, 3};
        Console.WriteLine(rakamlar[5]);
    }
}`,
          task: "Kodu try-catch içine alarak hatayı yakalayın.",
          expectedOutput: "Hata tespit edildi",
          validation: (code) => code.includes('try') && code.includes('catch') && code.includes('Hata tespit edildi')
        },
        quiz: [
          { question: "Hata çıkarma potansiyeli olan riskli kodların yazıldığı blok hangisidir?", options: ["catch", "finally", "try", "throw"], correct: 2 },
          { question: "Try bloğunda kod çalışırken bir hata (Exception) fırlatıldığında programın akışı anında nereye atlar?", options: ["Programı kapatır", "catch bloğunun içine atlar", "finally bloğuna atlar", "Döngüyü kırar"], correct: 1 },
          { question: "Hata olsun veya olmasın her koşulda mutlaka çalıştırılması garanti edilen blok hangisidir?", options: ["catch", "finally", "try", "else"], correct: 1 }
        ]
      }
    ]
  },
  {
    id: "bolum-4",
    title: "Metotlar (Fonksiyonlar)",
    icon: "⚙️",
    color: "#f59e0b",
    lessons: [
      {
        id: "ders-4-1",
        title: "Metotların Büyüsü (DRY Prensibi)",
        xp: 45,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Metot (Method) Nedir?</h2>
            <p>Metot, belli bir görevi yerine getiren ve <strong>sadece biz onu çağırdığımızda çalışan</strong> kod bloklarıdır. Programlamanın en kutsal kuralı olan <strong>DRY (Don't Repeat Yourself - Kendini Tekrar Etme)</strong> prensibinin temelidir.</p>
            <p>Eğer aynı kod bloğunu projenizde 5 farklı yerde kullanıyorsanız, o kodu 5 kere yazmak yerine 1 tane "Metot" oluşturur ve o metodu 5 kere "çağırırsınız".</p>

            <h3>Metot Tanımlamak ve Çağırmak</h3>
            <div class="code-ex">
<pre><code class="language-csharp">class Program
{
  // 1. Metodu Tanımlıyoruz (Class'ın içinde ama Main'in dışında olmalı!)
  static void SelamVer() 
  {
    Console.WriteLine("Herkese Selamlar!");
  }

  static void Main(string[] args)
  {
    // 2. Metodu Çağırıyoruz (İstediğimiz kadar çağırabiliriz)
    SelamVer(); 
    SelamVer(); 
  }
}</code></pre>
            </div>
            
            <p><strong>Açıklama:</strong><br>
            <code>static</code>: Metodun sadece bu sınıfa ait olduğunu belirtir.<br>
            <code>void</code>: "Boş" anlamına gelir. Metodun işini bitirdikten sonra bize geriye bir veri (sayı, metin vs.) <strong>döndürmeyeceğini</strong> belirtir.</p>
          `,
          starterCode: `using System;

class Program
{
    static void MesajYaz()
    {
        Console.WriteLine("C# Öğrenmek Çok Zevkli!");
    }

    static void Main(string[] args)
    {
        // GÖREV: Yukarıda tanımlanan MesajYaz metodunu burada çağırın.
        
    }
}`,
          task: "MesajYaz() metodunu Main bloğu içerisinde çağırın.",
          expectedOutput: "C# Öğrenmek Çok Zevkli!",
          validation: (code) => code.includes('MesajYaz();')
        },
        quiz: [
          { question: "Metotların programlamadaki en temel kullanım amacı (DRY Prensibi) nedir?", options: ["Hataları bulmak", "Döngüleri kırmak", "Aynı kodu tekrar tekrar yazmayı önlemek", "Değişken tanımlamak"], correct: 2 },
          { question: "Bir metodun yazdığımız kodlar arasında çalışması için ne yapmamız GEREKİR?", options: ["Başına public yazmak", "Onu bir döngüye almak", "İsmini kullanarak çağırmak (Örn: Metodum();)", "Sadece tanımlamak yeterlidir"], correct: 2 },
          { question: "Metot tanımlarken kullanılan 'void' kelimesinin anlamı nedir?", options: ["Metot hatalı", "Metot geriye hiçbir değer döndürmez", "Metot sonsuz döngüde", "Metot değişkendir"], correct: 1 }
        ]
      },
      {
        id: "ders-4-2",
        title: "Parametreler ve Geri Dönüş (Return)",
        xp: 55,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Metotlara Bilgi Göndermek (Parametreler)</h2>
            <p>Metotların içine veri gönderebiliriz. Buna parametre veya argüman denir. Metotları bir fırın gibi düşünün; dışarıdan un ve su (Parametre) gönderirsiniz, içeride hamur yoğrulur.</p>
            <div class="code-ex">
<pre><code class="language-csharp">static void IsimYazdir(string isim) // 'isim' adında bir string parametre bekliyor
{
  Console.WriteLine("Hoş geldin " + isim);
}

static void Main() 
{
  IsimYazdir("Ali");  // 'Ali' verisini gönderdik
  IsimYazdir("Ayşe"); // 'Ayşe' verisini gönderdik
}</code></pre>
            </div>

            <h2>Geri Dönüş Değerleri (Return)</h2>
            <p>Eğer fırına (metoda) gönderdiğiniz malzemelerin sadece içeride pişirilmesini değil, <strong>pişmiş ekmek olarak size geri verilmesini</strong> istiyorsanız <code>void</code> kullanamazsınız! Bunun yerine dönecek verinin tipini (<code>int</code>, <code>string</code>) yazarız ve <strong><code>return</code></strong> anahtar kelimesiyle sonucu geri fırlatırız.</p>
            <div class="code-ex">
<pre><code class="language-csharp">static int Topla(int x, int y) // Bu metot geriye 'int' döndürecek
{
  return x + y; // x ve y'yi topla ve sonucu beni çağıran yere fırlat!
}

static void Main() 
{
  // Topla metodunu 5 ve 3 ile çağırdık. Metot bize '8' fırlattı.
  int sonuc = Topla(5, 3); 
  Console.WriteLine(sonuc); // Çıktı: 8
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    // Bu metot a ve b'yi çarpıp sonucu geri döndürmeli
    static int Carp(int a, int b)
    {
        // GÖREV 1: a ve b parametrelerini çarpıp 'return' ile geri fırlatın.
        
    }

    static void Main(string[] args)
    {
        // GÖREV 2: Carp(4, 5) metodunu çağırıp, gelen sonucu Console.WriteLine ile yazdırın.
        
    }
}`,
          task: "Carp metodunu return ile tamamlayıp, Main içinde kullanarak ekrana 20 yazdırın.",
          expectedOutput: "20",
          validation: (code) => code.includes('return') && code.includes('Carp')
        },
        quiz: [
          { question: "Metotların çalışırken dışarıdan ihtiyaç duydukları verilere (parantez içine yazılan) ne ad verilir?", options: ["Class", "Parametre / Argüman", "Return", "Switch"], correct: 1 },
          { question: "Bir metodun işlemini bitirip elde ettiği sonucu dışarıya / çağrıldığı yere iletmesini sağlayan komut nedir?", options: ["send", "output", "return", "throw"], correct: 2 },
          { question: "Eğer bir metot geriye 'string' (metin) döndürüyorsa, metodun tanımlama kısmında 'void' yerine ne yazılmalıdır?", options: ["text", "return", "static", "string"], correct: 3 }
        ]
      },
      {
        id: "ders-4-3",
        title: "Metot Aşırı Yükleme (Method Overloading)",
        xp: 40,
        duration: "15 dk",
        content: {
          theory: `
            <h2>Method Overloading Nedir?</h2>
            <p>Aynı isimde fakat <strong>farklı parametrelere</strong> sahip birden fazla metot oluşturmaya "Method Overloading" (Metot Aşırı Yükleme) denir.</p>
            
            <p>Neden kullanırız? Örneğin toplama işlemi yapan bir metot yazacağız. Kullanıcı bazen iki tane tam sayıyı (int), bazen de ondalıklı sayıları (double) toplamak isteyebilir. İki farklı tip için <code>ToplaInt()</code> ve <code>ToplaDouble()</code> gibi çirkin isimler bulmak yerine, ikisine de <code>Topla()</code> ismini veririz. C# hangisini çalıştıracağını, gönderdiğiniz verinin tipine bakarak <strong>otomatik anlar!</strong></p>

            <div class="code-ex">
<pre><code class="language-csharp">// 1. Metot: Int toplar
static int Topla(int x, int y) 
{
  return x + y;
}

// 2. Metot: Double toplar (Aynı isme sahip!)
static double Topla(double x, double y) 
{
  return x + y;
}

static void Main() 
{
  int a = Topla(5, 10);        // C# zekidir, int olan Topla'yı çalıştırır
  double b = Topla(5.5, 2.3);  // C# zekidir, double olan Topla'yı çalıştırır
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    // 1. İki int toplayan metot
    static int Ekle(int a, int b) { return a + b; }
    
    // 2. ÜÇ int toplayan metot (Overloading)
    static int Ekle(int a, int b, int c) { return a + b + c; }

    static void Main(string[] args)
    {
        // GÖREV: Ekle() metodunu kullanarak ekrana "10" ve "15" yazdırın.
        // Birincisinde (5, 5) ikincisinde (5, 5, 5) gönderin.
        
    }
}`,
          task: "Overload edilmiş Ekle metodunu farklı sayıda parametrelerle çağırın.",
          expectedOutput: "10\n15",
          validation: (code) => code.includes('Ekle(5, 5)') && code.includes('Ekle(5, 5, 5)')
        },
        quiz: [
          { question: "Aynı isme sahip birden fazla metot tanımlama tekniğine OOP dünyasında ne ad verilir?", options: ["Method Overriding", "Method Overloading", "Method Polymorphism", "Method Hiding"], correct: 1 },
          { question: "İki metodun Overload edilebilmesi (aynı ismi alabilmesi) için neyin KESİNLİKLE farklı olması gerekir?", options: ["Geri Dönüş Tiplerinin (int/void)", "Metot İsimlerinin", "Parametre Sayısı veya Parametre Tiplerinin", "İçerisindeki Kodların"], correct: 2 }
        ]
      }
    ]
  },
  {
    id: "bolum-5",
    title: "Nesne Yönelimli Programlama (OOP) Masterclass",
    icon: "📦",
    color: "#10b981",
    lessons: [
      {
        id: "ders-5-1",
        title: "Sınıflar (Classes) ve Nesneler (Objects)",
        xp: 50,
        duration: "20 dk",
        content: {
          theory: `
            <h2>OOP (Object-Oriented Programming) Nedir?</h2>
            <p>Programlamayı, gerçek dünyadaki nesneleri bilgisayara öğreterek yapma tekniğidir. Gerçek dünyada bir "Araba" bir nesnedir. Arabanın ağırlığı, rengi gibi özellikleri (fields), ve gitmek, fren yapmak gibi eylemleri (methods) vardır.</p>

            <h3>Sınıf (Class) vs Nesne (Object)</h3>
            <p>Bu OOP'nin en önemli ayrımıdır!</p>
            <ul>
              <li><strong>Class (Sınıf / Şablon):</strong> Bir mimari çizim (Mavi baskı) gibidir. Evin nasıl olacağını tarif eder ama ortada ev yoktur. (Örn: Sınıf adı Meyve)</li>
              <li><strong>Object (Nesne):</strong> O şablona bakılarak inşa edilmiş gerçek şeydir! (Örn: Elma bir nesnedir, Muz başka bir nesnedir).</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">// 1. ŞABLONU OLUŞTURUYORUZ
class Araba 
{
  public string renk = "Kırmızı"; // Özellik (Field)
}

class Program 
{
  static void Main(string[] args) 
  {
    // 2. ŞABLONDAN YENİ BİR NESNE ÜRETİYORUZ (new anahtar kelimesi ile)
    Araba benimArabam = new Araba(); 
    Araba seninAraban = new Araba();
    
    // 3. NESNENİN ÖZELLİKLERİNE ULAŞIYORUZ (.)
    seninAraban.renk = "Mavi";
    Console.WriteLine(benimArabam.renk); // Çıktı: Kırmızı
  }
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Oyuncu 
{
    public string isim = "Kahraman";
}

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Oyuncu sınıfından 'oyuncu1' adında yeni bir nesne (new Oyuncu()) oluşturun.
        // Daha sonra Nokta (.) operatörünü kullanarak oyuncu1'in 'isim' özelliğini ekrana yazdırın.
        
    }
}`,
          task: "Oyuncu sınıfından bir nesne üretip özelliğini ekrana yazdırın.",
          expectedOutput: "Kahraman",
          validation: (code) => code.includes('new Oyuncu()') && code.includes('oyuncu1.isim')
        },
        quiz: [
          { question: "Sınıf (Class) ile Nesne (Object) arasındaki ilişki en iyi nasıl özetlenir?", options: ["Sınıf, Nesnenin diğer adıdır", "Nesne bir şablondur, Sınıf ondan üretilir", "Sınıf bir şablondur (mimari çizim), Nesne o şablondan üretilen gerçek yapıdır", "Sınıf değişkendir, Nesne metottur"], correct: 2 },
          { question: "C#'ta bir sınıftan (class) yepyeni, kanlı canlı bir nesne (object) yaratmak için hafızadan yer ayıran anahtar kelime nedir?", options: ["create", "new", "make", "build"], correct: 1 },
          { question: "Oluşturduğumuz bir nesnenin içindeki özelliğe (field) erişmek için nesne adı ile özellik arasına HANGİ İŞARET konulur?", options: ["-", "_", ".", ":"], correct: 2 }
        ]
      },
      {
        id: "ders-5-2",
        title: "Kurucu Metotlar (Constructors)",
        xp: 45,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Nesne Doğarken Çalışan Metot: Constructors</h2>
            <p>Bir nesne (Object) <code>new</code> kelimesiyle yaratıldığı an, saniyenin binde biri hızında <strong>otomatik olarak çalışan</strong> çok özel bir metottur. Genellikle nesne doğarken onun başlangıç değerlerini (ismini, yaşını) ayarlamak için kullanılır.</p>

            <h3>Kurucu Metot Kuralları:</h3>
            <ul>
              <li>Metodun adı, bulunduğu <strong>Sınıfın (Class) adıyla tamamen aynı</strong> olmak ZORUNDADIR!</li>
              <li>Geri dönüş tipi yoktur (<code>void</code>, <code>int</code> vs. yazılmaz).</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">class Araba 
{
  public string model; // Özellik

  // Sınıf adıyla AYNI İSİMDE Constructor (Kurucu Metot) oluşturduk
  // Dışarıdan modelAdi adında bir parametre istiyor
  public Araba(string modelAdi) 
  {
    model = modelAdi; 
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    // Nesneyi oluştururken parantez içine veriyi ("Mustang") veriyoruz. 
    // Bu veri direkt olarak Kurucu Metoda gider!
    Araba ford = new Araba("Mustang"); 
    Console.WriteLine(ford.model); // Çıktı: Mustang
  }
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Kedi
{
    public string isim;
    
    // GÖREV: Sınıf ile AYNI ADA SAHİP bir Kurucu Metot (Constructor) yazın.
    // Dışarıdan 'string kediIsmi' alsın ve bunu 'isim' değişkenine atasın.
    
}

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Kedi sınıfından "Tekir" adıyla yeni bir nesne türetip, isim özelliğini yazdırın.
        
    }
}`,
          task: "Constructor kullanarak Kedi nesnesini isimle başlatın.",
          expectedOutput: "Tekir",
          validation: (code) => code.includes('public Kedi') && code.includes('new Kedi("Tekir")')
        },
        quiz: [
          { question: "Kurucu metotların (Constructor) isimleri belirlenirken hangi katı kurala uyulması ZORUNLUDUR?", options: ["Init ile başlamalı", "Main olmalı", "Bulunduğu Sınıfın (Class) adıyla BİREBİR AYNI olmalı", "Büyük harfle başlamamalı"], correct: 2 },
          { question: "Bir sınıfın içindeki kurucu metot (Constructor) NE ZAMAN kendiliğinden çalışır?", options: ["Sınıf yazıldığında", "Sınıftan yeni bir nesne (Object) üretildiği anda (new komutuyla)", "Program kapatıldığında", "Manuel çağrıldığında"], correct: 1 },
          { question: "Kurucu metotları yazarken (Örn: public SinifAdi()), geriye döndürdükleri veri tipleri (void, int) nereye yazılır?", options: ["Başına", "Sonuna", "Parantez İçine", "Hiçbir yere yazılmaz! Kurucu metotların geri dönüş tipleri yoktur."], correct: 3 }
        ]
      },
      {
        id: "ders-5-3",
        title: "Kapsülleme (Properties ve Get/Set)",
        xp: 55,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Bilgiyi Koruma Sanatı: Kapsülleme (Encapsulation)</h2>
            <p>Bir banka hesabı sınıfı yazdığınızı düşünün. Hesabın "Bakiye" özelliğini herkesin rastgele değiştirmesini ister misiniz? Tabii ki hayır! Verileri dış dünyanın doğrudan müdahalesinden gizlemek OOP'nin en önemli kuralıdır.</p>
            
            <h3>Erişim Belirleyiciler (Access Modifiers)</h3>
            <ul>
              <li><strong><code>public</code>:</strong> Herkes, her yerden ulaşabilir. (Güvensiz)</li>
              <li><strong><code>private</code>:</strong> Sadece tanımlandığı sınıfın İÇİNDEN ulaşılabilir. Dış dünyaya tamamen kapanır. (Güvenli)</li>
            </ul>

            <h3>Properties (Özellikler) - Kontrollü Kapı</h3>
            <p>Madem <code>private</code> yapıp gizledik, biz bu veriye nasıl ulaşacağız? İşte burada <strong>Properties (Get ve Set)</strong> devreye girer. Property'ler, private değişkene ulaşmak için konulmuş "güvenlik görevlileri" gibidir.</p>

            <div class="code-ex">
<pre><code class="language-csharp">class BankaHesabi 
{
  // 1. Gerçek veri GİZLİ (private)
  private int bakiye = 1000; 

  // 2. Kontrollü Kapı (public Property - Baş harfi BÜYÜK yazılır)
  public int Bakiye 
  {
    get { return bakiye; } // Birisi bakiyeyi okumak isterse bu çalışır
    
    set { 
      // Birisi bakiyeyi değiştirmek isterse 'value' değişkeniyle gelir
      if (value > 0) { bakiye = value; } // Sadece pozitif para yatırabilir!
    } 
  }
}

class Program {
  static void Main() {
    BankaHesabi hesap = new BankaHesabi();
    hesap.Bakiye = -500; // Güvenlik görevlisi (set) bunu reddeder!
    Console.WriteLine(hesap.Bakiye); // Çıktı: 1000 (get çalıştı)
  }
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Kasa 
{
    // private: Dışarıdan KESİNLİKLE erişilemez
    private int miktar = 500;
    
    // GÖREV: 'Miktar' adında public bir Property (get) oluşturarak 
    // private 'miktar' değişkenini Dışarıdan OKUMAYA (get) açın. set yazmanıza gerek yok.
    
}

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Kasa nesnesi oluşturup Miktar Property'sini ekrana yazdırın.
    }
}`,
          task: "Encapsulation kuralına uygun Property (get) yazarak veriyi okuyun.",
          expectedOutput: "500",
          validation: (code) => code.includes('get') && code.includes('return miktar')
        },
        quiz: [
          { question: "Bir değişkenin veya metodun sadece kendi tanımlandığı sınıfın İÇİNDEN kullanılmasına izin veren (dışarıdan gizleyen) kelime hangisidir?", options: ["public", "protected", "private", "hidden"], correct: 2 },
          { question: "Private yapılmış gizli verilere güvenli bir şekilde dışarıdan veri atamak veya veri okumak için hangi C# yapısı kullanılır?", options: ["Namespace", "Properties (get ve set)", "Constructor", "Public Arrays"], correct: 1 },
          { question: "Properties (get/set) yapısında, dışarıdan değişkene atanmak istenen yeni değer hangi gizli anahtar kelimenin içinde gelir?", options: ["data", "input", "value", "newValue"], correct: 2 }
        ]
      },
      {
        id: "ders-5-4",
        title: "Kalıtım / Miras Alma (Inheritance)",
        xp: 60,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Kalıtım (Inheritance) Nedir?</h2>
            <p>Eğer "Kedi" ve "Köpek" adında iki sınıf yazıyorsanız, ikisinde de "yemekYe()" ve "uyu()" gibi ortak metotlar olacaktır. Aynı kodları iki kere yazmak DRY (Kendini Tekrar Etme) kuralına aykırıdır.</p>
            <p>Bunun yerine bir "Hayvan" (Parent/Base Class) sınıfı yazarsınız. Kedi ve Köpek sınıfları Hayvan sınıfından <strong>Miras (Inheritance)</strong> alırlar. Böylece Hayvan sınıfındaki tüm kodlara bedavadan sahip olurlar!</p>
            
            <p>C# dilinde miras almak için <strong>iki nokta üst üste (<code>:</code>)</strong> sembolü kullanılır.</p>

            <div class="code-ex">
<pre><code class="language-csharp">// Base Sınıf (Miras Veren Ebeveyn)
class Arac 
{
  public string marka = "Ford";
  public void KornaCal() { Console.WriteLine("Düüt!"); }
}

// Derived Sınıf (Miras Alan Çocuk)
class Araba : Arac  // Arac sınıfından tüm özellikleri miras aldı!
{
  public string model = "Mustang";
}

class Program 
{
  static void Main() 
  {
    Araba benimAraba = new Araba();
    // Araba sınıfının içinde KornaCal metodu YOKTUR. Ama miras aldığı için kullanabilir!
    benimAraba.KornaCal(); 
    Console.WriteLine(benimAraba.marka + " " + benimAraba.model);
  }
}</code></pre>
            </div>
            
            <div class="tip-box">
              <span>🔒</span>
              <p><strong>Miras Bırakmayı Yasaklamak: <code>sealed</code></strong><br>Eğer bir sınıfın başına <code>sealed</code> (mühürlü) yazarsanız (Örn: <code>sealed class Arac</code>), başka hiçbir sınıf ondan miras alamaz! Son noktadır.</p>
            </div>
          `,
          starterCode: `using System;

// Base Class
class Hayvan 
{
    public void SesCikar() 
    {
        Console.WriteLine("Hayvan ses çıkarıyor");
    }
}

// GÖREV: 'Kedi' adında yeni bir sınıf oluşturun ve 'Hayvan' sınıfından miras almasını sağlayın.

class Program
{
    static void Main(string[] args)
    {
        // GÖREV: Kedi sınıfından bir nesne üretin ve miras aldığı SesCikar() metodunu kullanın.
        
    }
}`,
          task: "Hayvan sınıfından miras alan Kedi sınıfını oluşturup metodunu kullanın.",
          expectedOutput: "Hayvan ses çıkarıyor",
          validation: (code) => code.includes('class Kedi : Hayvan') && code.includes('SesCikar()')
        },
        quiz: [
          { question: "C#'ta bir sınıfın (class) başka bir sınıftan kalıtım/miras almasını sağlayan işaret hangisidir?", options: ["-", "=>", ":", "::"], correct: 2 },
          { question: "Özelliklerini diğer sınıflara dağıtan (Miras Bırakan) Üst Sınıfa OOP jargonunda ne ad verilir?", options: ["Derived Class", "Base Class (Parent)", "Child Class", "Sub Class"], correct: 1 },
          { question: "Bir sınıfın MİRAS ALINMASINI KESİN OLARAK YASAKLAYAN (kilitleyen) anahtar kelime hangisidir?", options: ["private", "static", "sealed", "locked"], correct: 2 }
        ]
      },
      {
        id: "ders-5-5",
        title: "Çok Biçimlilik (Polymorphism) ve Override",
        xp: 65,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Çok Biçimlilik (Polymorphism) Nedir?</h2>
            <p>Polymorphism "birçok form" anlamına gelir. Kalıtımla (Mirasla) %100 bağlantılıdır. Miras alınan bir metodun, alt sınıflar tarafından <strong>kendi ihtiyaçlarına göre ezilmesi ve değiştirilmesi</strong> işlemine denir.</p>

            <p>Örneğimize dönelim: Bir "Hayvan" (Parent) sınıfı <code>SesCikar()</code> metoduna sahip olabilir. Ancak Kedi sınıfı miras aldığında "Miyav" demelidir, Köpek sınıfı miras aldığında "Hav Hav" demelidir. İkisi de aynı metodu çağırır ama <strong>farklı formlarda (Polymorphism)</strong> çalışırlar.</p>

            <h3>Virtual (İzin Veren) ve Override (Ezen)</h3>
            <ul>
              <li><strong><code>virtual</code> (Sanal):</strong> Ana (Base) sınıftaki metodun başına eklenir. Manası: "Benden miras alan sınıflar, isterlerse bu metodu ezebilir/değiştirebilir."</li>
              <li><strong><code>override</code> (Geçersiz Kılan):</strong> Alt sınıftaki metodun başına eklenir. Manası: "Ben ebeveynimden gelen metodu eziyorum ve kendi versiyonumu yazıyorum."</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">class Hayvan  // Ebeveyn
{
  // virtual ile ezilmeye yeşil ışık yaktık
  public virtual void SesCikar() { Console.WriteLine("Hayvan Sesi"); }
}

class Kopek : Hayvan  // Çocuk
{
  // override ile ebeveynin metodunu kendi isteğimize göre ezdik!
  public override void SesCikar() { Console.WriteLine("Hav hav!"); }
}

class Program 
{
  static void Main() 
  {
    Hayvan benimKopegim = new Kopek();
    benimKopegim.SesCikar(); // Çıktı: Hav hav!
  }
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Arac 
{
    // GÖREV 1: Alt sınıfların bu metodu ezebilmesi için 'virtual' kelimesini ekleyin.
    public void Calis() 
    {
        Console.WriteLine("Araç çalışıyor");
    }
}

class Araba : Arac 
{
    // GÖREV 2: Üstten gelen metodu ezmek için 'override' kelimesini ekleyin.
    public void Calis() 
    {
        Console.WriteLine("Araba: Vruuum!");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Araba a = new Araba();
        a.Calis(); // Çıktı "Araba: Vruuum!" olmalı
    }
}`,
          task: "virtual ve override kullanarak polymorphism (çok biçimlilik) yapısını tamamlayın.",
          expectedOutput: "Araba: Vruuum!",
          validation: (code) => code.includes('virtual') && code.includes('override')
        },
        quiz: [
          { question: "Ana sınıftaki (Base Class) bir metodun, onu miras alan alt sınıflar tarafından DEĞİŞTİRİLEBİLMESİNE İZİN VEREN anahtar kelime hangisidir?", options: ["override", "public", "virtual", "abstract"], correct: 2 },
          { question: "Miras alınan bir metodu EZEREK (geçersiz kılarak) yeniden kendi sınıfı için yazan çocuk sınıf (Derived), metodun başına HANGİ KELİMEYİ koymalıdır?", options: ["override", "virtual", "new", "base"], correct: 0 },
          { question: "Farklı nesnelerin (Kedi, Köpek) aynı metot çağrısına (SesCikar) farklı tepkiler vermesi (Miyav, HavHav) hangi OOP prensibinin sonucudur?", options: ["Encapsulation (Kapsülleme)", "Polymorphism (Çok Biçimlilik)", "Class Fields", "Constructors"], correct: 1 }
        ]
      }
    ]
  },
  {
    id: "bolum-6",
    title: "İleri Seviye C# (Advanced C#)",
    icon: "🔬",
    color: "#ec4899",
    lessons: [
      {
        id: "ders-6-1",
        title: "Esnek Diziler: List<T>",
        xp: 50,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Standart Dizilerin (Arrays) Sınırları</h2>
            <p>Normal dizileri (Örn: <code>int[] notlar = new int[3];</code>) oluştururken en baştan <strong>kaç eleman alacaklarını belirtmek zorundayız</strong> ve bu kapasite daha sonra DEĞİŞTİRİLEMEZ. Eğer 4. elemanı eklemeye çalışırsanız program çöker.</p>

            <h2>Listeler (List<T>) Kurtarıcıdır!</h2>
            <p>Listeler "dinamik dizilerdir". En baştan boyut belirtmenize gerek yoktur. Siz eleman ekledikçe <code>List</code> kendiliğinden esner ve büyür. Kullanmak için sayfanın en üstüne <code>using System.Collections.Generic;</code> kütüphanesini eklemelisiniz.</p>

            <div class="code-ex">
<pre><code class="language-csharp">using System.Collections.Generic; // List için şart

class Program {
  static void Main() {
    // String tipinde esnek bir liste oluşturuyoruz
    List&lt;string&gt; arabalar = new List&lt;string&gt;();

    // İstediğimiz kadar eleman ekleyebiliriz! (.Add metodu)
    arabalar.Add("Volvo");
    arabalar.Add("BMW");
    arabalar.Add("Ford");

    // Kaç eleman var? (Dizilerdeki .Length yerine .Count kullanılır)
    Console.WriteLine(arabalar.Count); // Çıktı: 3

    // Eleman Silmek (.Remove)
    arabalar.Remove("BMW");
  }
}</code></pre>
            </div>
          `,
          starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        List<int> puanlar = new List<int>();
        
        // GÖREV: 
        // 1. puanlar listesine .Add() metodunu kullanarak 100 ve 85 sayılarını ekleyin.
        // 2. Listenin eleman sayısını (.Count) ekrana yazdırın.
        
    }
}`,
          task: "Listeye Add() ile eleman ekleyip Count ile sayısını ekrana yazdırın.",
          expectedOutput: "2",
          validation: (code) => code.includes('.Add(100)') && code.includes('.Add(85)') && code.includes('.Count')
        },
        quiz: [
          { question: "Normal diziler (Arrays) ile List<T> (Listeler) arasındaki EN BÜYÜK FARK nedir?", options: ["Listeler sadece sayı tutabilir", "Diziler daha hızlıdır", "Dizilerin boyutu sabittir, Listeler siz veri ekledikçe esneyip büyüyebilir", "Hiçbir fark yoktur"], correct: 2 },
          { question: "Bir Listeye (Örn: List<string> isimler) yeni bir veri eklemek için hangi metot kullanılır?", options: ["isimler.Add(\"Ali\");", "isimler.Push(\"Ali\");", "isimler.Insert(\"Ali\");", "isimler + \"Ali\";"], correct: 0 },
          { question: "Bir Listede toplam kaç adet veri olduğunu bulmak için HANGİ ÖZELLİK kullanılır?", options: [".Length", ".Size", ".Count", ".Capacity"], correct: 2 }
        ]
      },
      {
        id: "ders-6-2",
        title: "Sözlükler (Dictionary)",
        xp: 60,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Dictionary (Sözlük) Nedir?</h2>
            <p>Gerçek hayattaki bir sözlüğü düşünün. Bir kelime (Anahtar/Key) ararsınız ve karşılığında bir anlam (Değer/Value) bulursunuz.</p>
            <p>C# dilinde <strong><code>Dictionary&lt;TKey, TValue&gt;</code></strong> sınıfı, verileri 0,1,2 gibi otomatik index numaralarıyla değil, <strong>sizin belirlediğiniz anahtarlarla (Key)</strong> saklamanızı sağlar.</p>

            <div class="code-ex">
<pre><code class="language-csharp">using System.Collections.Generic;

class Program {
  static void Main() {
    // Key (Plaka) -> int, Value (Şehir Adı) -> string
    Dictionary&lt;int, string&gt; plakalar = new Dictionary&lt;int, string&gt;();

    // Veri Eklerken (Key, Value) şeklinde ekleriz
    plakalar.Add(34, "İstanbul");
    plakalar.Add(6, "Ankara");
    plakalar.Add(35, "İzmir");

    // Veri Okumak (Index numarası yerine Anahtarı -Plakayı- veriyoruz)
    Console.WriteLine(plakalar[34]); // Çıktı: İstanbul
  }
}</code></pre>
            </div>

            <div class="tip-box">
              <span>⚠️</span>
              <p><strong>Önemli Kural:</strong> Bir Dictionary içinde <strong>Anahtarlar (Keys) kesinlikle eşsiz (Unique) olmalıdır!</strong> Aynı sözlüğe iki kere '34' anahtarını eklemeye çalışırsanız program çöker.</p>
            </div>
          `,
          starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // Anahtarı string (Kelime), Değeri string (Anlamı) olan bir sözlük
        Dictionary<string, string> ingilizceSozluk = new Dictionary<string, string>();
        
        // GÖREV:
        // 1. ingilizceSozluk içine .Add() metoduyla "Apple" anahtarını ve "Elma" değerini ekleyin.
        // 2. Köşeli parantez [ ] içine anahtarı ("Apple") yazarak Elma değerini okuyup ekrana yazdırın.
        
    }
}`,
          task: "Dictionary oluşturup anahtar ile değere erişin.",
          expectedOutput: "Elma",
          validation: (code) => code.includes('.Add("Apple"') && code.includes('ingilizceSozluk["Apple"]')
        },
        quiz: [
          { question: "Verileri 0,1,2 gibi numaralar (indexler) yerine SİZİN BELİRLEDİĞİNİZ ANAHTARLAR (Key) ile saklayan yapı hangisidir?", options: ["Array (Dizi)", "List (Liste)", "Dictionary (Sözlük)", "Enum"], correct: 2 },
          { question: "Dictionary kullanımında ANAHTARLAR (Keys) ile ilgili hangi kural kesindir?", options: ["Sadece string olabilirler", "Sadece int olabilirler", "Her bir Anahtar (Key) EŞSİZ (Unique) olmak zorundadır", "Sürekli değişebilirler"], correct: 2 },
          { question: "Dictionary<int, string> veriler = new Dictionary<int, string>(); tanımında Anahtar (Key) ve Değer (Value) tipleri sırasıyla nedir?", options: ["Sıra fark etmez", "İkisi de int", "İkisi de string", "Anahtar = int, Değer = string"], correct: 3 }
        ]
      },
      {
        id: "ders-6-3",
        title: "LINQ: Verilerle Dans Etmek",
        xp: 75,
        duration: "25 dk",
        content: {
          theory: `
            <h2>LINQ (Language Integrated Query) Nedir?</h2>
            <p>Eskiden bir listenin içindeki "Sadece çift sayıları" bulmak için uzun uzun <code>foreach</code> döngüleri ve <code>if</code> şartları yazardık. <strong>LINQ</strong> sayesinde veritabanı sorgular gibi (SQL'e benzer) tek satırda dizileri filtreleyip parçalayabiliriz!</p>
            <p>Kullanmak için <code>using System.Linq;</code> kütüphanesini sayfanın başına eklemeniz gerekir.</p>

            <h3>1. Where (Filtreleme)</h3>
            <p>Bir listedeki verileri bir koşula göre süzer.</p>
            <div class="code-ex">
<pre><code class="language-csharp">using System.Linq; // LINQ için şart!

List&lt;int&gt; sayilar = new List&lt;int&gt; { 5, 12, 8, 20, 3 };

// Okunuşu: sayilar içindeki her bir 'x' için, x'in 10'dan büyük olanlarını Getir (Where) 
// ve bunları yeni bir Listeye çevir (.ToList)
List&lt;int&gt; buyukler = sayilar.Where(x =&gt; x &gt; 10).ToList();

// buyukler listesinde artık sadece 12 ve 20 var!</code></pre>
            </div>

            <h3>2. OrderBy (Sıralama) ve First/Last</h3>
            <ul>
              <li><strong><code>OrderBy(x =&gt; x)</code>:</strong> Küçükten büyüğe (A-Z) sıralar.</li>
              <li><strong><code>OrderByDescending(x =&gt; x)</code>:</strong> Büyükten küçüğe sıralar.</li>
              <li><strong><code>First()</code>:</strong> Listedeki ilk elemanı getirir.</li>
              <li><strong><code>Sum()</code> / <code>Max()</code> / <code>Min()</code>:</strong> Listedeki elemanların toplamını, en büyüğünü veya en küçüğünü bulur.</li>
            </ul>

            <div class="code-ex">
<pre><code class="language-csharp">List&lt;string&gt; isimler = new List&lt;string&gt; {"Ali", "Zeynep", "Can"};

// İsimleri A'dan Z'ye sıralayıp İLK olanı al:
string ilkIsim = isimler.OrderBy(i =&gt; i).First(); 
Console.WriteLine(ilkIsim); // Çıktı: Ali</code></pre>
            </div>
            
            <div class="tip-box">
              <span>💡</span>
              <p><strong>Ok Operatörü (=>) Nedir?</strong> Buna <strong>Lambda Expression</strong> denir. "Şunun için Şunu yap" anlamına gelen çok kısa bir fonksiyon yazım şeklidir.</p>
            </div>
          `,
          starterCode: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        List<int> notlar = new List<int> { 45, 80, 95, 30, 100, 60 };
        
        // GÖREV: 
        // 1. LINQ 'Where' kullanarak 'notlar' listesindeki 50'den büyük olanları filtreleyin.
        // 2. Filtrelenen bu sayıların kaç tane olduğunu (.Count) yazdırın.
        
    }
}`,
          task: "LINQ Where kullanarak listeyi filtreleyin ve eleman sayısını yazdırın.",
          expectedOutput: "4",
          validation: (code) => code.includes('.Where(') && code.includes('.Count')
        },
        quiz: [
          { question: "Listeler üzerinde SQL benzeri sorgular (filtreleme, sıralama) yapmamızı sağlayan C# kütüphanesi (using System.?) hangisidir?", options: ["System.Collections", "System.Linq", "System.Database", "System.Query"], correct: 1 },
          { question: "sayilar.Where(x => x > 10) içindeki '=>' işaretinin C# dünyasındaki teknik adı nedir?", options: ["Pointer", "Lambda Expression", "Ternary Operator", "Arrow Function"], correct: 1 },
          { question: "Bir listeyi Büyükten Küçüğe (veya Z'den A'ya) sıralamak için hangi LINQ metodu kullanılır?", options: [".OrderBy()", ".SortDown()", ".OrderByDescending()", ".Reverse()"], correct: 2 }
        ]
      }
    ]
  },
  {
    id: "bolum-7",
    title: "C# Ninja Masterclass ⚔️",
    icon: "🥷",
    color: "#eab308",
    lessons: [
      {
        id: "ders-7-1",
        title: "Asenkron Programlama (async / await)",
        xp: 100,
        duration: "30 dk",
        content: {
          theory: `
            <h2>Asenkron (Async) Nedir ve Neden Hayatidir?</h2>
            <p>Bir kafede kahve siparişi verdiğinizi düşünün. Kasiyer siparişi alıp kahveyi hazırlamaya başlarsa ve o sırada <strong>arkadaki tüm müşterileri kahve bitene kadar bekletirse</strong>, bu <em>Senkron (Synchronous)</em> programlamadır. Uygulamanız (örneğin bir oyun veya web sitesi) donar!</p>
            <p>Eğer kasiyer siparişi alıp başka bir çalışana verirse ve "Kahve hazır olana kadar ben sıradaki müşterileri alayım" derse, işte bu <strong>Asenkron (Asynchronous)</strong> programlamadır!</p>

            <h3>async, await ve Task</h3>
            <p>İnternetten veri çekerken, veritabanına bağlanırken veya büyük dosyalar okurken asenkron çalışmak zorundayız. C# bunu <code>async</code>, <code>await</code> ve <code>Task</code> üçlüsü ile çok kolaylaştırır.</p>

            <div class="code-ex">
<pre><code class="language-csharp">using System.Threading.Tasks; // Task için gerekli kütüphane

class Program {
  // Metodun başına 'async' ekliyoruz ve geri dönüşünü 'Task' yapıyoruz
  static async Task KahveHazirlaAsync() 
  {
    Console.WriteLine("Kahve makinesi çalıştı...");
    
    // await: Makine çalışırken bekle ama PROGRAMI DONDURMA!
    // Task.Delay(3000): 3 saniyelik sahte bir bekleme (internet bağlantısı gibi)
    await Task.Delay(3000); 
    
    Console.WriteLine("Kahve hazır!");
  }

  static async Task Main() 
  {
    Console.WriteLine("Sipariş alındı.");
    
    // Kahvenin yapılmasını ASENKRON olarak bekliyoruz
    await KahveHazirlaAsync(); 
    
    Console.WriteLine("Müşteriye teslim edildi.");
  }
}</code></pre>
            </div>
            
            <div class="tip-box">
              <span>⚠️</span>
              <p><strong>Altın Kural:</strong> İçinde <code>await</code> kullanacağınız her metodun başına kesinlikle <code>async</code> yazmak zorundasınız. Async bir virüs gibidir, bulaştığı her metodu Task'a çevirir!</p>
            </div>
          `,
          starterCode: `using System;
using System.Threading.Tasks;

class Program
{
    // GÖREV 1: Bu metodun başına 'async' ekleyin ve geri dönüş tipini 'Task' yapın
    static void DosyaIndir()
    {
        Console.WriteLine("İndirme başladı...");
        // GÖREV 2: Burada programı DONDURMADAN 2 saniye bekletmek için
        // await Task.Delay(2000); komutunu kullanın.
        Console.WriteLine("İndirme bitti!");
    }

    static async Task Main(string[] args)
    {
        // GÖREV 3: DosyaIndir metodunu 'await' ile çağırın.
        
    }
}`,
          task: "DosyaIndir metodunu asenkron (async/await) hale getirin.",
          expectedOutput: "İndirme başladı...\nİndirme bitti!",
          validation: (code) => code.includes('async Task DosyaIndir') && code.includes('await Task.Delay') && code.includes('await DosyaIndir()')
        },
        quiz: [
          { question: "Uzun süren işlemleri yaparken kullanıcı arayüzünün (UI) donmasını engelleyen programlama yaklaşımı nedir?", options: ["Senkron (Synchronous)", "Asenkron (Asynchronous)", "Dinamik", "Statik"], correct: 1 },
          { question: "C# dilinde asenkron bir işlemin tamamlanmasını 'beklemek' (ancak sistemi dondurmamak) için HANGİ KELİME kullanılır?", options: ["wait", "delay", "sleep", "await"], correct: 3 },
          { question: "Eğer bir metodun içinde 'await' kullanacaksanız, metodun BAŞINA kesinlikle hangi kelimeyi yazmak zorundasınız?", options: ["virtual", "public", "async", "Task"], correct: 2 }
        ]
      },
      {
        id: "ders-7-2",
        title: "Generic Tipler (T) Sırrı",
        xp: 80,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Generics (Jenerikler) Nedir?</h2>
            <p>Metot Aşırı Yükleme (Overloading) dersinde aynı işlemi yapan ama biri int, biri double alan iki farklı metot yazmıştık. Ya 50 farklı tip için yazmamız gerekseydi?</p>
            <p>İşte <strong>Generics</strong>, kodu yazarken "Bunun veri tipine SİSTEMİ ÇALIŞTIRAN KİŞİ o an karar versin" demenin yoludur. Bilinmeyen bu tipe genellikle <strong><code>&lt;T&gt;</code></strong> (Type) denir.</p>

            <h3>Generic Metot Yazmak</h3>
            <p>Metot adının yanına <code>&lt;T&gt;</code> ekleyerek "Bu metot T adında joker bir tip kabul eder" demiş oluruz.</p>

            <div class="code-ex">
<pre><code class="language-csharp">class Program {
  // &lt;T&gt; jokeri sayesinde bu metot HER TİP veriyi alıp yazdırabilir!
  static void EkranaYaz&lt;T&gt;(T veri) 
  {
    Console.WriteLine("Gelen veri: " + veri);
  }

  static void Main() 
  {
    EkranaYaz&lt;int&gt;(50);          // T burada 'int' oldu
    EkranaYaz&lt;string&gt;("Elma");   // T burada 'string' oldu
    EkranaYaz&lt;bool&gt;(true);       // T burada 'bool' oldu
  }
}</code></pre>
            </div>
            
            <p>Aslında öğrendiğimiz <code>List&lt;string&gt;</code> yapısı da Microsoft mühendislerinin yazdığı Generic bir sınıftır! Listeyi yapan mühendisler içine ne koyacağınızı bilmedikleri için onu <code>List&lt;T&gt;</code> olarak tasarlamışlardır.</p>
          `,
          starterCode: `using System;

class Program
{
    // GÖREV: 'DegerGoster' adında Generic (<T>) bir metot tanımlayın.
    // Dışarıdan 'T tipinde' bir parametre alsın ve bunu Console.WriteLine ile yazdırsın.
    

    static void Main(string[] args)
    {
        // GÖREV: Yazdığınız DegerGoster metodunu bir kez <string> olarak "C#",
        // bir kez de <double> olarak 99.9 ile çağırın.
        
    }
}`,
          task: "Generic bir metot tanımlayın ve farklı veri tipleriyle çağırın.",
          expectedOutput: "C#\n99.9",
          validation: (code) => code.includes('<T>') && code.includes('DegerGoster')
        },
        quiz: [
          { question: "C# dilinde içine yazılacak veri tipini (int, string) kullanım anına kadar belirsiz bırakan 'Joker Tip' kavramına ne ad verilir?", options: ["Var Type", "Dynamic", "Generics (<T>)", "Polymorphism"], correct: 2 },
          { question: "Generic metotları veya sınıfları tanımlarken veri tipini temsil eden joker harf GELENEKSEL OLARAK hangisidir?", options: ["X", "V", "A", "T"], correct: 3 },
          { question: "Aşağıdakilerden hangisi C#'ta halihazırda bulunan (built-in) Generic bir sınıftır?", options: ["Math", "Console", "List<T>", "String"], correct: 2 }
        ]
      }
    ]
  },
  {
    id: "bolum-8",
    title: "Gerçek Dünya Sahneleri (Local Env) 🌍",
    icon: "🏗️",
    color: "#0ea5e9",
    lessons: [
      {
        id: "ders-8-1",
        title: "Dosya İşlemleri (File I/O)",
        xp: 120,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Gerçek Dünyada Verileri Kaydetmek</h2>
            <p>Şu ana kadar yazdığımız tüm değişkenler program kapandığında (RAM'den silindiği için) kayboluyordu. Gerçek dünyada verileri kalıcı olarak saklamak için onları <strong>Hard Disk'teki bir dosyaya</strong> yazmalıyız.</p>
            <p>C# bu işlemler için <code>System.IO</code> kütüphanesini ve <code>File</code> sınıfını sunar.</p>

            <h3>File.WriteAllText() ve File.ReadAllText()</h3>
            <p>Bir dosyaya anında metin yazmak ve geri okumak inanılmaz kolaydır!</p>

            <div class="code-ex">
<pre><code class="language-csharp">using System.IO; // Dosya işlemleri için ZORUNLU!

class Program 
{
  static void Main() 
  {
    string dosyaYolu = "log.txt";
    string metin = "Sisteme giriş yapıldı: 12:00";

    // 1. Yazma (Dosya yoksa oluşturur, varsa İÇİNDEKİLERİ SİLİP üzerine yazar)
    File.WriteAllText(dosyaYolu, metin);
    
    // 2. Okuma (Dosyanın içindeki tüm metni string olarak getirir)
    string okunanVeri = File.ReadAllText(dosyaYolu);
    Console.WriteLine(okunanVeri);
  }
}</code></pre>
            </div>
            
            <div class="info-box">
              <span class="info-icon">⚠️</span>
              <div>
                <strong>AppendAllText (Ekleme Yapmak)</strong>
                <p>Eğer var olan bir dosyanın içindekileri silmeden sonuna yeni bir satır eklemek isterseniz <code>File.AppendAllText()</code> kullanmalısınız.</p>
              </div>
            </div>
          `,
          starterCode: `using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string path = "ayarlar.txt";
        string data = "Tema: Karanlık";
        
        // GÖREV: 
        // 1. File.WriteAllText() komutunu kullanarak 'data' değişkenini 'path' yoluna YAZIN.
        // (Sanal simülasyon bunu yakalayıp onaylayacaktır).
        
    }
}`,
          task: "File sınıfını kullanarak veriyi dosyaya yazdırın.",
          expectedOutput: "[SİMÜLASYON] Dosya yazma işlemi başarılı!",
          validation: (code) => code.includes('File.WriteAllText(path, data)') || code.includes('File.WriteAllText(path,data)')
        },
        quiz: [
          { question: "C# dilinde dosya işlemleri (Okuma/Yazma) yapabilmek için sayfanın en üstüne hangi kütüphane eklenmelidir?", options: ["System.Data", "System.IO", "System.File", "System.Text"], correct: 1 },
          { question: "Bir dosyanın İÇİNDEKİLERİ SİLMEDEN sonuna yeni metinler (Log gibi) eklemek için hangi metot kullanılır?", options: ["File.WriteAllText()", "File.AppendAllText()", "File.InsertText()", "File.AddText()"], correct: 1 },
          { question: "Bir dosyanın içindeki tüm veriyi okuyup size 'string' (metin) olarak geri veren metot hangisidir?", options: ["File.ReadAllText()", "File.GetText()", "File.OpenRead()", "File.ReadString()"], correct: 0 }
        ]
      },
      {
        id: "ders-8-2",
        title: "Sanal Veritabanı Bağlantısı (SQL)",
        xp: 150,
        duration: "30 dk",
        content: {
          theory: `
            <h2>Veritabanına (Database) Neden İhtiyacımız Var?</h2>
            <p>Eğer bir uygulamada milyonlarca kullanıcı, şifre ve sipariş varsa bunları <code>.txt</code> dosyalarında tutamazsınız. Veriler, çok hızlı arama yapılabilen MSSQL, MySQL veya PostgreSQL gibi veritabanı motorlarında saklanır.</p>
            
            <h3>Connection String (Bağlantı Dizesi)</h3>
            <p>Bir veritabanına girmek, kilitli bir kapıdan geçmek gibidir. Elinizde <strong>Sunucu Adresi, Veritabanı Adı, Kullanıcı Adı ve Şifre</strong>'den oluşan bir anahtar olmalıdır. Buna <code>Connection String</code> denir.</p>

            <h3>ADO.NET ile Temel Bağlantı (SqlConnection)</h3>
            <p>C# ile MSSQL veritabanına bağlanmanın en saf hali <code>System.Data.SqlClient</code> kütüphanesini kullanmaktır.</p>

            <div class="code-ex">
<pre><code class="language-csharp">using System.Data.SqlClient;

class Program 
{
  static void Main() 
  {
    // 1. Anahtarımız (Connection String)
    string baglantiTuru = "Server=myServer;Database=myDB;User Id=admin;Password=123;";
    
    // 2. Köprü Oluşturma (SqlConnection)
    SqlConnection baglanti = new SqlConnection(baglantiTuru);
    
    try 
    {
      // 3. Kapıyı Aç!
      baglanti.Open();
      Console.WriteLine("Veritabanına başarıyla bağlanıldı!");
    }
    catch (Exception ex) 
    {
      Console.WriteLine("Bağlantı Hatası: " + ex.Message);
    }
    finally 
    {
      // 4. İŞİN BİTİNCE KAPIYI KESİNLİKLE KAPAT!
      baglanti.Close(); 
    }
  }
}</code></pre>
            </div>
            
            <div class="tip-box">
              <span>💡</span>
              <p><strong>using Bloğu:</strong> Programcılar <code>finally { baglanti.Close(); }</code> yazmayı sık sık unutur. Bu yüzden C#'ta genellikle <code>using (SqlConnection con = new SqlConnection(str)) { con.Open(); }</code> yapısı kullanılır. Bu yapı, süslü parantez bitince bağlantıyı OTOMATİK kapatır!</p>
            </div>
          `,
          starterCode: `using System;
using System.Data.SqlClient;

class Program
{
    static void Main(string[] args)
    {
        string connStr = "Server=LocalHost;Database=EgitimDB;";
        
        // GÖREV: 
        // 1. Yukarıdaki 'connStr' ile 'sql' adında yeni bir SqlConnection nesnesi oluşturun.
        // 2. sql.Open(); diyerek bağlantıyı (sanal olarak) açın.
        
    }
}`,
          task: "SqlConnection nesnesi oluşturup Open() metodu ile bağlantıyı açın.",
          expectedOutput: "[SİMÜLASYON] EgitimDB veritabanına bağlantı başarılı!",
          validation: (code) => code.includes('new SqlConnection(connStr)') && code.includes('sql.Open()')
        },
        quiz: [
          { question: "Veritabanına bağlanmak için gereken Sunucu, Kullanıcı Adı ve Şifre gibi bilgileri içeren uzun metne ne ad verilir?", options: ["Access Key", "Connection String", "Auth Token", "SQL Password"], correct: 1 },
          { question: "C# ile MSSQL veritabanı arasında bir KÖPRÜ görevi gören ve bağlantıyı sağlayan sınıf (Class) hangisidir?", options: ["SqlCommand", "SqlReader", "SqlConnection", "SqlDatabase"], correct: 2 },
          { question: "Veritabanına Open() ile bağlandıktan ve işlemler bittikten sonra en son YAPILMASI ZORUNLU OLAN KRİTİK İŞLEM nedir?", options: ["Değişkenleri silmek", "Bilgisayarı yeniden başlatmak", "Bağlantıyı Close() ile mutlaka kapatmak", "Veritabanını yedeklemek"], correct: 2 }
        ]
      },
      {
        id: "ders-8-3",
        title: "Deployment: Projeyi Dağıtmak",
        xp: 150,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Uygulama Bitti, Şimdi Ne Olacak?</h2>
            <p>Visual Studio veya VS Code içerisinde "Çalıştır (Run)" butonuna bastığınızda, kodlarınız <strong>Debug (Hata Ayıklama)</strong> modunda derlenir. Bu mod yavaştır, içine kodları adım adım izlemek için ekstra ağırlıklar koyar. Bu haldeki bir projeyi müşteriye teslim edemezsiniz!</p>

            <h3>Release Modu (Piyasaya Sürme)</h3>
            <p>Uygulamanız tamamen bittiğinde ve test edildiğinde, onu <strong>Release</strong> modunda derlemelisiniz. C# Derleyicisi (Compiler) Release modundayken kodlarınızı muazzam bir şekilde optimize eder, gereksiz her şeyi atar ve performansı zirveye çıkarır.</p>

            <h3>dotnet publish Komutu</h3>
            <p>Uygulamanızı paketleyip bir klasöre (Örn: \`bin/Release/net8.0/publish\`) çıkartmak için terminalde (CMD) kullanacağınız sihirli komut şudur:</p>
            
            <div class="code-ex">
<pre><code class="language-bash"># Projeyi Release modunda son kullanıcı için paketle:
dotnet publish -c Release

# Eğer kodun İÇİNE .NET kurmaya GEREK KALMADAN her bilgisayarda
# çalışmasını isterseniz (Self-Contained):
dotnet publish -c Release --self-contained true -r win-x64</code></pre>
            </div>
            
            <div class="info-box">
              <span class="info-icon">🚀</span>
              <div>
                <strong>Tebrikler, Artık Bir Yazılımcısınız!</strong>
                <p>Bu modülle birlikte sadece C# kodlamayı değil, kodun Hard Disk'e nasıl yazıldığını, veritabanı ile nasıl konuştuğunu ve günün sonunda müşteriye nasıl paketlenip (Deployment) gönderildiğini de teorik ve pratik olarak kavramış oldunuz.</p>
              </div>
            </div>
          `,
          starterCode: `// Bu derste C# kodu yazmayacağız, Terminal mantığını simüle edeceğiz.
// GÖREV: 
// Ekrana Console.WriteLine() kullanarak bir projeyi Release modunda 
// paketlemek için terminale yazmamız gereken sihirli komutu ("dotnet publish -c Release") yazdırın.

using System;

class Program 
{
    static void Main() 
    {
        
    }
}`,
          task: "Projeyi paketleme komutunu (dotnet publish -c Release) Console.WriteLine ile yazdırın.",
          expectedOutput: "dotnet publish -c Release",
          validation: (code) => code.includes('dotnet publish -c Release')
        },
        quiz: [
          { question: "Geliştirme aşamasında hataları bulmak için kullanılan (yavaş) mod ile, projeyi müşteriye teslim ederken kullanılan (hızlı ve optimize) modun adları sırasıyla nedir?", options: ["Start / Stop", "Test / Prod", "Debug / Release", "Dev / Build"], correct: 2 },
          { question: "Bir .NET uygulamasını müşteriye veya sunucuya gönderilmek üzere paketleyen terminal komutu hangisidir?", options: ["dotnet run", "dotnet publish", "dotnet build", "dotnet pack"], correct: 1 },
          { question: "Uygulamamızı müşterinin bilgisayarında .NET kurulu olmasa BİLE çalışacak şekilde (Self-Contained) paketlemek istersek komuta hangi parametreyi eklemeliyiz?", options: ["--no-framework", "--self-contained true", "--include-net", "--standalone"], correct: 1 }
        ]
      }
    ]
  },
  {
    id: "bolum-9",
    title: "Hata Çözme Sanatı (Debug Mode) 🐛",
    icon: "🔧",
    color: "#ef4444",
    lessons: [
      {
        id: "ders-9-1",
        title: "Syntax Terörü (CS1002)",
        xp: 150,
        duration: "20 dk",
        content: {
          theory: `
            <h2>Yazılımcının Gerçek İşi: Hata Ayıklamak (Debugging)</h2>
            <p>Eğitim platformlarında kodları her zaman sıfırdan yazarsınız, ancak profesyonel hayatta vaktinizin %80'i <strong>başkasının yazdığı bozuk kodları düzelterek (Debug)</strong> geçer!</p>
            
            <h3>Compiler Hataları (Derleme Zamanı Hatası)</h3>
            <p>Eğer C# dilinin gramer kurallarına (Syntax) uymazsanız program <strong>ASLA ÇALIŞMAZ</strong> ve size kırmızı bir hata mesajı fırlatır.</p>
            
            <div class="info-box">
              <span class="info-icon">🔍</span>
              <div>
                <strong>En Sık Yapılan 2 Hata:</strong>
                <ul>
                  <li><strong>CS1002 - Eksik Noktalı Virgül:</strong> Satır sonlarında <code>;</code> unutmak.</li>
                  <li><strong>Süslü Parantez Hatası:</strong> Bir bloğu <code>{</code> ile açıp <code>}</code> ile kapatmayı unutmak veya yanlış yerde kapatmak.</li>
                </ul>
              </div>
            </div>
            
            <p>Sağ taraftaki kod <strong>BOZUK!</strong> Şu an çalıştırırsanız C# Derleyicisi hata verecektir. Göreviniz bu hatayı bulmak ve kodu "Derlenebilir (Çalışabilir)" hale getirmek.</p>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string mesaj = "Merhaba Dünya" // HATA 1: Burada bir şey eksik!
        
        if (mesaj.Length > 0)
        {
            Console.WriteLine(mesaj);
        // HATA 2: if bloğu nerede kapanıyor?
    }
}`,
          task: "Koddaki 2 syntax (sözdizimi) hatasını bularak programı çalışır hale getirin.",
          expectedOutput: "Merhaba Dünya",
          validation: (code) => code.includes('string mesaj = "Merhaba Dünya";') && code.includes('Console.WriteLine(mesaj);') && (code.match(/\\}/g) || []).length === (code.match(/\\{/g) || []).length
        },
        quiz: [
          { question: "C# derleyicisinin (Compiler) ekrana fırlattığı 'CS1002' hata kodu genellikle ne anlama gelir?", options: ["Değişken tanımlanmamış", "Satır sonunda noktalı virgül (;) eksik", "Sonsuz döngü", "Veritabanı bağlantı hatası"], correct: 1 },
          { question: "Bir kodda süslü parantezlerin sayısının ({ ve }) eşleşmemesi durumunda hangi türde bir hata alırsınız?", options: ["Mantık Hatası (Logic Error)", "Çalışma Zamanı Hatası (Runtime Error)", "Sözdizimi Hatası (Syntax Error)", "Veri Kaybı"], correct: 2 }
        ]
      },
      {
        id: "ders-9-2",
        title: "Sonsuz Döngü Kapanı",
        xp: 150,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Sinsi Hatalar: Mantık (Logic) Hataları</h2>
            <p>Kodunuzun gramerinde hiçbir sorun yoktur. Derleyici (Compiler) hata fırlatmaz, program sorunsuz başlar. <strong>Ancak program sizin beklediğiniz gibi davranmaz, kilitlenir veya yanlış hesap yapar.</strong> Bunlar bulunması en zor hatalardır!</p>
            
            <h3>Sonsuz Döngüler (Infinite Loops)</h3>
            <p>Özellikle <code>while</code> döngülerinde sayacı artırmayı unutursanız, koşul her zaman <code>true</code> (doğru) kalır. Bilgisayar saniyede milyonlarca kez aynı işlemi yapmaya çalışır ve işlemci (CPU) kilitlenir.</p>

            <div class="code-ex">
<pre><code class="language-csharp">int x = 0;
while (x &lt; 5) 
{
  Console.WriteLine("Dönüyorum!");
  // Eğer buraya x++; yazmazsak x hep 0 kalır! (Sonsuz Döngü)
}</code></pre>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        int i = 0;
        
        // DİKKAT: Bu kod sonsuz döngüye girmek üzere tasarlanmıştır.
        // Görevin: Sonsuz döngüyü engelleyecek kodu (i++) doğru yere eklemek.
        
        while (i < 3)
        {
            Console.WriteLine("Sayı: " + i);
            
        }
    }
}`,
          task: "while döngüsünün içine 'i++' ekleyerek sonsuz döngüyü önleyin.",
          expectedOutput: "Sayı: 0\nSayı: 1\nSayı: 2",
          validation: (code) => code.includes('i++') && code.includes('while')
        },
        quiz: [
          { question: "Programın derlenmesinde (çalışmasında) sorun olmayan ancak hatalı sonuç üreten veya kilitlenen hatalara genel olarak ne ad verilir?", options: ["Syntax Error", "Logic Error (Mantıksal Hata)", "Compiler Error", "System Crash"], correct: 1 },
          { question: "while döngülerinde sonsuz döngüyü engellemek için genellikle hangi işlem yapılır?", options: ["break komutu yazmak", "Sayaç değişkenini artırmak/azaltmak (Örn: i++)", "Döngüyü if içine almak", "Döngüyü tamamen silmek"], correct: 1 }
        ]
      },
      {
        id: "ders-9-3",
        title: "Dizi Taşması (IndexOutOfRange)",
        xp: 150,
        duration: "25 dk",
        content: {
          theory: `
            <h2>Çalışma Zamanı (Runtime) Hataları</h2>
            <p>Program derlenir, hata vermez. Hatta bir süre düzgün çalışır. Ama tam o riskli kod tetiklendiğinde program aniden <strong>çöker!</strong> Bunlara Runtime (Çalışma Zamanı) hataları denir.</p>
            
            <h3>IndexOutOfRangeException Belası</h3>
            <p>Diziler (Arrays) ile çalışırken en çok karşılaşacağınız Runtime hatasıdır. 3 kapasiteli bir diziden, 5. elemanı (olmayan bir şeyi) istemeye çalıştığınızda fırlatılır.</p>

            <div class="code-ex">
<pre><code class="language-csharp">string[] isimler = { "Ali", "Ayşe", "Veli" };
// isimler[0] = Ali
// isimler[1] = Ayşe
// isimler[2] = Veli

// Çalışma Zamanı (Runtime) Çöküşü:
Console.WriteLine(isimler[3]); // 3. İndeks YOK! ÇÖKER!</code></pre>
            </div>
            
            <div class="tip-box">
              <span>💡</span>
              <p><strong>Çözüm Yolları:</strong><br>1. İndeks numarasının doğru verildiğinden emin olmak.<br>2. Riskli kodu <code>try...catch</code> bloğuna alıp hatayı güvenli bir şekilde (programı çökertmeden) yakalamak.</p>
            </div>
          `,
          starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        string[] renkler = { "Kırmızı", "Mavi", "Yeşil" }; // 3 Elemanlı dizi (Index: 0,1,2)
        
        // HATA: Kod olmayan bir veriye ulaşmaya çalışıyor ve çökecek!
        // GÖREV: Kodu düzelterek ekrana "Yeşil" yazdırın.
        
        Console.WriteLine(renkler[3]);
    }
}`,
          task: "Kodu IndexOutOfRange hatası vermeyecek şekilde düzeltin (Yeşil yazdırın).",
          expectedOutput: "Yeşil",
          validation: (code) => code.includes('renkler[2]') && !code.includes('renkler[3]')
        },
        quiz: [
          { question: "Programın sorunsuz açıldıktan sonra belirli bir eylem sonucunda (örn: olmayan dosyayı okuma, kapasiteyi aşma) aniden çökmesine ne ad verilir?", options: ["Syntax Error", "Logic Error", "Runtime Error (Çalışma Zamanı Hatası)", "Compile Error"], correct: 2 },
          { question: "int[] notlar = {10, 20}; dizisinde ekrana notlar[5] yazdırılırsa C# hangi hatayı fırlatır?", options: ["NullReferenceException", "IndexOutOfRangeException", "DivideByZeroException", "CS1002"], correct: 1 }
        ]
      }
    ]
  },
  {
    id: "bolum-10",
    title: "Yapay Zekadan Fark Yaratma Dersi",
    icon: "🧠",
    color: "#22c55e",
    lessons: [
      {
        id: "ders-10-1",
        title: "Yapay Zekadan Neyi Farkli Yapabilirim?",
        xp: 0,
        duration: "20 dk",
        content: {
          contentOnly: true,
          theory: `
            <h2>Yapay Zekadan Neyi Farkli Yapabilirim?</h2>
            <p>Yapay zeka hizlidir ve cok sey bilir. Ama tek basina urun basarisi getirmez. Seni farkli yapan sey; <strong>baglam kurabilmen</strong>, <strong>dogru onceliklendirme yapman</strong>, <strong>insan davranisini okuyabilmen</strong> ve <strong>sorumluluk alip sonuca gidebilmen</strong>dir.</p>

            <h3>1) AI Caginda Fark Yaratan 6 Yetkinlik</h3>
            <ul>
              <li><strong>Problem Tanimi:</strong> Sorunu dogru tanimlamak, cozumun %50'sidir. AI genelde verilen soruya cevap verir; sen sorunun kendisini yeniden cercevelersin.</li>
              <li><strong>Urun Dusuncesi:</strong> "Calisiyor mu?"dan once "kullaniciya deger uretiyor mu?" sorusunu sorarsin.</li>
              <li><strong>Karar Verme:</strong> Teknik borc, teslim suresi ve kalite arasinda dengeli karar verirsin.</li>
              <li><strong>Iletisim:</strong> Teknik bilgiyi teknik olmayan ekiplere sade ve olculebilir sekilde anlatirsin.</li>
              <li><strong>Sahiplenme:</strong> Kod yazmakla kalmaz, test, gozlemleme ve iyilestirme dongusunu da tamamlarsin.</li>
              <li><strong>Etik ve Guven:</strong> Gizlilik, veri guvenligi, yanli tahminler gibi riskleri gorebilir ve yonetebilirsin.</li>
            </ul>

            <h3>2) Gunluk Hayattan Somut Ornekler</h3>
            <div class="op-table">
              <table>
                <tr><th>Senaryo</th><th>AI'nin Tipik Cevabi</th><th>Senin Fark Yaratan Yaklasimin</th></tr>
                <tr><td>Yemek tarifi uygulamasi</td><td>Genel tarif listesi uretir</td><td>Kullanicinin evdeki malzemesine, butcesine ve kalan sureye gore kisit bazli oneriler sunarsin</td></tr>
                <tr><td>Kargo takip</td><td>Durum bilgisi gosterir</td><td>Gecikmede proaktif bilgilendirme + telafi kuponu gibi stres azaltan akis tasarlarsin</td></tr>
                <tr><td>Kafe POS</td><td>Siparis kodu olusturur</td><td>Kasa, stok, iade ve yogun saat senaryolari icin hataya dayanlikli surec kurarsin</td></tr>
                <tr><td>Egitim platformu</td><td>Quiz sorusu yazar</td><td>Seviye bazli ogrenme rotasi + unutma egri destekli tekrar sistemi tasarlarsin</td></tr>
              </table>
            </div>

            <h3>3) Su Ana Kadar Ogrendiklerinle Uretebilecegin Is Cikan Projeler</h3>
            <ul>
              <li><strong>Mikro CRM:</strong> Musteri kaydi, notlar, filtreleme, hata yonetimi (List/Dictionary/LINQ + Try/Catch).</li>
              <li><strong>Stok Takip Araci:</strong> Urun ekle-sil-guncelle, kritik stok uyarisi, dosyaya kaydetme (File I/O).</li>
              <li><strong>Siparis Simulasyonu:</strong> OOP ile Musteri/Siparis/Urun modelleri, metotlarla temiz is kurallari.</li>
              <li><strong>Raporlama Konsolu:</strong> LINQ ile gun sonu satis ozeti, en cok satan urun, kategori bazli analiz.</li>
              <li><strong>Mini Is Takip Uygulamasi:</strong> Gorev durumlari, onceliklendirme, son tarih kontrolu, loglama.</li>
            </ul>

            <h3>4) Is Hayatinda Kendini Kanitlama Rehberi</h3>
            <div class="info-box">
              <div>
                <strong>4D Yaklasimi: Define → Design → Deliver → Demonstrate</strong>
                <p>Her projede once problemi tanimla, sonra tasarla, teslim et ve sonunda olculebilir etkisini goster.</p>
              </div>
            </div>
            <ul>
              <li><strong>Define (Tanimla):</strong> Problem, hedef metrik ve kisitlari 1 sayfada netlestir.</li>
              <li><strong>Design (Tasarla):</strong> Cozumu sinif diyagrami, akis plani, hata senaryolariyla kur.</li>
              <li><strong>Deliver (Teslim Et):</strong> Calisan urun + README + kurulum adimi + test adimlari ile cik.</li>
              <li><strong>Demonstrate (Goster):</strong> "Ne yaptim?" degil, "Hangi sorunu ne kadar iyilestirdim?" diliyle sun.</li>
            </ul>

            <h3>5) Mulakatlarda Fark Yaratan Cevap Stili</h3>
            <ul>
              <li><strong>Durum:</strong> Hangi probleme girdin?</li>
              <li><strong>Eylem:</strong> Hangi teknik secimleri neden yaptin?</li>
              <li><strong>Sonuc:</strong> Ne degisti? (hiz, hata orani, okunabilirlik, bakim maliyeti)</li>
            </ul>
            <p>Ornek: "Kod yazdim" yerine "Try-catch ve validation ekleyerek runtime hata oranini test senaryolarinda belirgin sekilde dusurdum" de.</p>

            <h3>6) 30-60-90 Gunluk Gelisim Plani</h3>
            <ul>
              <li><strong>Ilk 30 gun:</strong> Temel C# + metot + OOP tekrar, 2 kucuk konsol projesi bitir.</li>
              <li><strong>60 gun:</strong> LINQ, dosya isleme, hata yonetimi iceren 1 orta seviye proje cik.</li>
              <li><strong>90 gun:</strong> Capstone projeni portfolyo formatinda yayinla, teknik sunum hazirla.</li>
            </ul>

            <h3>7) Son Soz</h3>
            <p>AI seni hizlandirir; ama seni <strong>vazgecilmez</strong> yapan sey, belirsizlikte karar alman, insan odagini kaybetmemen ve sorumlulukla sonuca ulasmandir.</p>
          `,
          starterCode: `// Bu ders teori odaklidir. Kod gorevi yoktur.`,
          task: "Teori dersini oku ve kendi yol haritani cikart."
        },
        quiz: []
      }
    ]
  }
];

// Kullanışlı yardımcı fonksiyonlar
function getTotalLessons() {
  return CURRICULUM.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
}

function getLessonById(lessonId) {
  for (const chapter of CURRICULUM) {
    const lesson = chapter.lessons.find(l => l.id === lessonId);
    if (lesson) return { lesson, chapter };
  }
  return null;
}

function getChapterById(chapterId) {
  return CURRICULUM.find(c => c.id === chapterId);
}
