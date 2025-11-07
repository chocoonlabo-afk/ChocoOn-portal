// app/page.tsx
export default function HomePage() {
  const apps = [
    {
      name: "Pocoapoco",
      desc: "子どもや生徒の「今日何分やったか」「どんな練習をしたか」を記録しておけるアプリです。保護者・指導者が進捗を把握しやすくなります。",
      img: "/icons/pocoapoco.png",
      // ← ここを /buy/pocoapoco にした
      link: "/buy/pocoapoco",
    },
    {
      name: "PocoPractice",
      desc: "開発中 もうしばらくお待ちください",
      img: "/icons/pocopractice.png",
    },
    {
      name: "ConcertNow",
      desc: "開発中 もうしばらくお待ちください",
      img: "/icons/concertnow.png",
    },
    {
      name: "MAESTRONOTE",
      desc: "開発中 もうしばらくお待ちください",
      img: "/icons/maestronote.png",
    },
    {
      name: "FamiCal",
      desc: "開発中 もうしばらくお待ちください",
      img: "/icons/famical.png",
    },
    {
      name: "SakuLog",
      desc: "開発中 もうしばらくお待ちください",
      img: "/icons/sakulog.png",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* 茶色の帯（styleで直指定） */}
      <header
        className="w-full"
        style={{ backgroundColor: "#3A1F0F", color: "#D9C29C" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center gap-5 text-center">
          <img src="/logo.png" alt="ChocoOnLabo" className="h-16 w-auto" />
          <p className="leading-relaxed text-base md:text-lg">
            私たちは、「子どもの成長と学びをテクノロジーで支える」をテーマに、
            <br className="hidden md:block" />
            音楽・教育現場で役立つアプリを開発しています。
          </p>
        </div>
      </header>

      {/* アプリ一覧 */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {apps.map((app, idx) => (
            <div
              key={app.name}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-32 h-32">
                <img
                  src={app.img}
                  alt={app.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm leading-relaxed text-slate-800">
                {idx === 0 ? (
                  <>
                    <p>{app.desc}</p>
                    <a
                      href={app.link}
                      className="mt-2 inline-block text-slate-900 underline"
                    >
                      詳細／購入ページへ
                    </a>
                  </>
                ) : (
                  <p>{app.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
