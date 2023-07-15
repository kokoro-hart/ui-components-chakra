import { z } from "zod";

// ログインフォーム
export const loginSchema = z.object({
  name: z.string().nonempty("名前は必須です。"),
  email: z
    .string()
    .nonempty("メールアドレスは必須です。")
    .email("正しいメールアドレスを入力してください。"),
  password: z
    .string()
    .nonempty("ハスワードは必須です。")
    .min(6, "パスワードは6文字以上で入力してください。"),
});
