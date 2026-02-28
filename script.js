<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// DATA DARIPADA LAPORAN ENROLMEN</p>
<p class="p2"><br></p>
<p class="p1">const lelaki = 22;</p>
<p class="p1">const perempuan = 26;</p>
<p class="p2"><br></p>
<p class="p1">// Carta Jantina</p>
<p class="p1">const ctx1 = document.getElementById("genderChart").getContext("2d");</p>
<p class="p2"><br></p>
<p class="p1">new Chart(ctx1, {</p>
<p class="p1">type: "pie",</p>
<p class="p1">data: {</p>
<p class="p1">labels: ["Lelaki", "Perempuan"],</p>
<p class="p1">datasets: [{</p>
<p class="p1">data: [lelaki, perempuan],</p>
<p class="p1">backgroundColor: ["#3498db", "#e91e63"]</p>
<p class="p1">}]</p>
<p class="p1">}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Data Mengikut Kelas (Berdasarkan Laporan)</p>
<p class="p1">const kelasData = {</p>
<p class="p1">"1 Iltizam": 1,</p>
<p class="p1">"1 Jayyid": 2,</p>
<p class="p1">"1 Khoir": 1,</p>
<p class="p1">"1 Mumtaz": 1,</p>
<p class="p1">"2 Iltizam": 2,</p>
<p class="p1">"2 Jayyid": 6,</p>
<p class="p1">"2 Khoir": 6,</p>
<p class="p1">"2 Mumtaz": 6,</p>
<p class="p1">"3 Iltizam": 7,</p>
<p class="p1">"3 Jayyid": 5,</p>
<p class="p1">"3 Khoir": 6,</p>
<p class="p1">"3 Mumtaz": 5</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">const ctx2 = document.getElementById("classChart").getContext("2d");</p>
<p class="p2"><br></p>
<p class="p1">new Chart(ctx2, {</p>
<p class="p1">type: "bar",</p>
<p class="p1">data: {</p>
<p class="p1">labels: Object.keys(kelasData),</p>
<p class="p1">datasets: [{</p>
<p class="p1">label: "Jumlah Pengawas",</p>
<p class="p1">data: Object.values(kelasData),</p>
<p class="p1">backgroundColor: "#800000"</p>
<p class="p1">}]</p>
<p class="p1">},</p>
<p class="p1">options: {</p>
<p class="p1">responsive: true,</p>
<p class="p1">plugins: {</p>
<p class="p1">legend: { display: false }</p>
<p class="p1">}</p>
<p class="p1">}</p>
<p class="p1">});</p>
</body>
</html>
