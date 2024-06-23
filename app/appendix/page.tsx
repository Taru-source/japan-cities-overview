export default async function Page() {
  return (
    <div>
      <h2>データの算出について</h2>
      <p>当サイトのデータは、以下のソースから取得しています。</p>
      <ul>
        <li>
          家賃相場、都道府県市区町村の名称、人口：{" "}
          <a href="https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000003.html">
            平成30年住宅・土地統計調査 総務省
          </a>
        </li>
      </ul>
    </div>
  );
}
