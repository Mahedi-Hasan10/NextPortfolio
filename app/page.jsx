"use client";
import GameDot from "@/components/GameDot";
import Image from "next/image";
import Link from "next/link";
import {
  IoMdArrowDropup,
  IoMdArrowDropleft,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="lg:py-[130px] py-[0px] flex">
      <div className="lg:w-[50%] max-w-[100%] flex flex-col items-center justify-start lg:p-2 p-4">
        <div className="flex flex-col gap-[10px] px-4 max-w-[490px] py-[96px]">
          <p className="text-[#E5E9F0] text-lg font-[450]">Hi all. I am</p>
          <h1 className="text-[#E5E9F0] lg:text-[62px] md:text-[40px] text-[30px] ">
            Mahedi Hasan
          </h1>
          <h3 className="text-[#43D9AD] lg:text-[32px] md:text-[26px] text-[20px] font-[450]">
            &gt;
            <TypeAnimation
              sequence={[
                " Software Engineer",
                500,
                " Front-end Developer",
                500,
                " Backend Developer",
                500,
                " Programmer",
                500,
              ]}
              repeat={Infinity}
              speed={75}
            />
          </h3>
          <div className="text-[#607B96] font-[450] py-2 lg:mt-[80px] md:mt-[40px] mt-[20px] flex flex-col gap-[10px]">
            <p>&frasl; &frasl; find my profile on GitHub</p>
            <Link
              href="https://github.com/Mahedi-Hasan10"
              className="text-[16px] font-[500]"
            >
              <span className="text-[#4D5BCE]">Const</span>{" "}
              <span className="text-[#43D9AD]"> GithubLink</span> <span>=</span>{" "}
              <Link
                href="https://github.com/Mahedi-Hasan10"
                className="text-[#E99287]"
              >
                “https://github.com/Mahedi-Hasan10”
              </Link>
            </Link>
            <p className="mt-2">&frasl; &frasl; Download my resume</p>
            <Link
              href="https://drive.google.com/file/d/10AbcSkSHZRurwCtBeuiQVxEYXEhgjZBv/view?usp=sharin"
              className="text-[16px] font-[500]"
            >
              <span className="text-[#00a745]">Const</span>{" "}
              <span className="text-[#2580f4]"> Google Drive </span>{" "}
              <span>=</span>{" "}
              <Link
                href="https://drive.google.com/file/d/10AbcSkSHZRurwCtBeuiQVxEYXEhgjZBv/view?usp=sharing"
                className="text-[#f7b400]"
              >
                “www.drive.google.com/”
              </Link>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:block hidden custom-shadow rounded-lg h-fit">
        <div className="h-[475px] w-[510px] bg-[url('/Background.png')] bg-no-repeat  py-[20px] px-[35px] flex flex-col justify-between">
          <div className="flex justify-between mb-[8px]">
            <Image
              src="/bolt-up-left.svg"
              width={13}
              height={13}
              alt="bolt-left"
            />
            <Image
              src="/bolt-up-left.svg"
              width={13}
              height={13}
              alt="bolt-left"
            />
          </div>
          <div className="flex gap-6">
            <div className="bg-[#05202e] h-[405.32px] w-[238.96px] bg-opacity-84 shadow-inner rounded-[8px] flex flex-col items-center justify-end">
              <p className="mb-[150px]">Coming soon...</p>
              <button className="bg-[#FEA55F] px-[15px] py-[10px] text-white rounded-md mb-[25px]">
                Start Game
              </button>
            </div>
            <div className="h-[405.32px] w-[238.96px] bg-opacity-84 rounded-[8px] flex flex-col items-center justify-between">
              <div className="bg-[#185356] h-[142px] w-full rounded-lg px-3 py-2">
                <p className="text-[#fff] font-[450] text-[14px]">
                  &frasl; &frasl; use keyboard
                </p>
                <p className="text-[#fff] font-[450] text-[14px]">
                  &frasl; &frasl; arrows to play
                </p>
                <div className="text-[30px] mt-[7px]">
                  <div className="flex items-center justify-center">
                    <button className="px-[5px] py-[2px] rounded-lg bg-black text-white">
                      <IoMdArrowDropup />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="px-[5px] py-[2px] rounded-lg bg-black text-white">
                      <IoMdArrowDropleft />
                    </button>
                    <button className="px-[5px] py-[2px] rounded-lg bg-black text-white">
                      <IoMdArrowDropdown />
                    </button>
                    <button className="px-[5px] py-[2px] rounded-lg bg-black text-white">
                      <IoMdArrowDropright />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-[#fff] font-[450] text-[14px]">
                &frasl; &frasl; food left
              </p>
              <div className="grid grid-cols-5 gap-3 mt-[-30px]">
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
                <GameDot />
              </div>
              <button className="px-[15px] py-[10px] border border-white text-white rounded-md mb-[25px]">
                Skip
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-[8px]">
            <Image
              src="/bolt-up-left.svg"
              width={13}
              height={13}
              alt="bolt-left"
            />
            <Image
              src="/bolt-up-left.svg"
              width={13}
              height={13}
              alt="bolt-left"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
