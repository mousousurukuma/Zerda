import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ゲーマー向けポートフォリオサイト</h1>
      <nav>
        <ul>
          <li>
            <Link href="/auth/register">ユーザー登録</Link>
          </li>
          <li>
            <Link href="/auth/login">ログイン</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
