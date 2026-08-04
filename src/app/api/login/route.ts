import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const id = typeof body.id === "string" ? body.id.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!id || !password) {
    return NextResponse.json(
      { message: "아이디와 비밀번호를 모두 입력해주세요." },
      { status: 400 },
    );
  }

  const masterId = process.env.MES_MASTER_ID;
  const masterPassword = process.env.MES_MASTER_PASSWORD;
  if (!masterId || !masterPassword) {
    return NextResponse.json(
      { message: "관리자 로그인 환경변수가 설정되지 않았습니다." },
      { status: 500 },
    );
  }
  const isMaster = id === masterId && password === masterPassword;
  const response = NextResponse.json({ isMaster });

  if (isMaster) {
    response.cookies.set("mes_role", "master", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
  } else {
    response.cookies.delete("mes_role");
  }

  return response;
}
