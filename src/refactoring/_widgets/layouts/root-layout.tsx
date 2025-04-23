import { Outlet, Link, useLocation } from "react-router-dom";

export const RootLayout = () => {
  // 현재 위치 정보 가져오기
  const location = useLocation();

  // 현재 경로가 /admin인지 확인
  const isAdminPage = location.pathname === "/admin";

  // 토글 대상 경로 결정 (admin 페이지면 cart로, 아니면 admin으로)
  const togglePath = isAdminPage ? "/cart" : "/admin";
  const toggleText = isAdminPage ? "장바구니로 이동" : "관리자로 이동";

  return (
    <div className="app-container">
      <header className="bg-white shadow-md p-4 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">쇼핑몰</h1>
        </div>

        {/* 토글 버튼 */}
        <div className="mt-4 text-center">
          <Link
            to={togglePath}
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
          >
            {toggleText}
          </Link>
        </div>
      </header>

      <main className="content container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
