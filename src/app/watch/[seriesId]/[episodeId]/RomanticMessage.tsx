"use client";

import { useState, useEffect } from "react";

const romanticMessages = [
  "seninle her an çok değerli bebikim✨",
  "iyi seyirler bebik ❤️",
  "dünyanın en tatlı izleyicisine... ❤️",
  "izlerken beni de dusun askim ❤️",
  "keske birlikte izlesek askim ya ✨",
  "bu bolum senin kadar buyuleyici deil ama... ❤️",
  "senin gulusun butun sahnelerden daha parlak yavrum ✨",
  "of bebik of ya cok seviom seni ❤️",
  "ASKİM COOOKKKKKK GUZELSİNNNNNN✨",
  "gozlerin izlediğimiz her seyden daha guzel ❤️",
  "yaninda oldugum her an en sevdigim sahnr ✨",
  "sen benim hayatimin en guzel hikayeysisin bebikim ❤️",
  "SENİ İZLEMEK EN GUZEL DİZİYİ İZLEMEKTEN BİLE DAHA GUZEL ASKUM",
  "su an yaninda olup sana sarilmak vardi simdi ya",
  "su an yaninda olup kocaman bi tane opmek vardi bebik ya",
  "diziyi deilde beni izlesen keske askim",
  "dunyanin en sirin bebiki su an bunu okuyo bilon mu",
  "askim cok sansliyim ben ya",
  "iyiki varsin bebikolattecokolatalimuzlusüt",
  "artik hep birlikte izlicez askim cok az kaldi",
  "bekle bizi almanya",
  "izledigin her seyde benden bi parca bul isdiom askim ya",
  "seninle izleyince en sıkıcı şey bile dünyanın en iyi seyi olur askim",
  "izle sen izle ben seni dusunuyom",
  "bana mesaj atmayi unutma askim ozlerim seni yoksa",
  "DUR BEBİK BAKİM SANA"
];

export default function RomanticMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Rastgele bir mesaj seç (Client-side)
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    setMessage(romanticMessages[randomIndex]);
  }, []);

  if (!message) return null;

  return (
    <div style={{ 
        margin: '1.5rem 0 1rem', 
        padding: '1rem', 
        background: 'rgba(244, 114, 182, 0.1)', 
        borderLeft: '4px solid var(--romantic)',
        borderRadius: '4px',
        fontStyle: 'italic',
        color: 'var(--romantic)',
        fontSize: '1.1rem'
    }}>
        "{message}"
    </div>
  );
}
