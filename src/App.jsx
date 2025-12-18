import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <p className="app__badge">開発ステップ1</p>
        <h1 className="app__title">simple-calculator-app</h1>
        <p className="app__subtitle">
          計算機Webアプリの開発準備として、バニラなReact環境をセットアップしました。
        </p>
      </header>
      <section className="app__content">
        <p>
          次のステップではコンポーネントやCSSを整えて、GitHub Pages上で動作する計算機を作り込んでいきます。
        </p>
      </section>
    </main>
  );
}

export default App;
