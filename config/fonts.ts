import { Rubik, Open_Sans, Roboto, Manrope } from "next/font/google";

export const fontRubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 根据需求添加不同的字体权重
  display: "swap",
});

export const fontOpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const fontManrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

