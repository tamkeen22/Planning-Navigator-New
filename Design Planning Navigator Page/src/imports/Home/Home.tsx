import svgPaths from "./svg-4ydat2w2dv";
import imgFade from "./0919fcf2fa3fbc0f915fe6e67f5a53117c62ba49.png";
import imgRectangle5659 from "./36bcf3630d13ff3f404d2805c409bf5bbe2d20e4.png";
import imgArtwork from "./d70b6197ad273b027963ac160c78678dc775b118.png";
import imgArtwork1 from "./6c1aa2c51987151c9bf9d4ea3bd39d601706d308.png";
import imgIStock5016532921 from "./b14961b507bf5370be68261dc5f5f279c03749c3.png";
import imgIStock5016532922 from "./4cfd69a36f3cc4e231bb4fcf1e2f4e9a7d758e8e.png";
import { imgBg } from "./svg-dd9xh";

function Content() {
  return (
    <div className="absolute contents font-['Poppins:Bold',sans-serif] inset-[4.55%_16.39%_90.27%_10.91%] leading-[1.177] not-italic" data-name="Content">
      <p className="absolute inset-[5.32%_16.39%_90.27%_10.91%] text-[96.992px] text-white tracking-[-2.9097px]">Got an idea for your home or land?</p>
      <p className="absolute inset-[4.55%_46.2%_94.67%_10.91%] text-[#1b76d8] text-[24.248px] tracking-[-0.7274px]">Planning Navigator</p>
    </div>
  );
}

function HeadlineSection() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[11.23%] right-[36.83%] top-[calc(50%-2291.24px)]" data-name="Headline Section">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30.31px] text-white w-full" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss08'" }}>
        <p className="leading-[42.434px]">{`Whether it's an extension, loft conversion, annex, garage, outbuilding, or a change of use — answer a few simple questions to understand what may be possible for your project.`}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[10.91%] right-[16.39%] top-[263.24px]">
      <Content />
      <HeadlineSection />
    </div>
  );
}

function MainCta() {
  return (
    <div className="absolute bg-[#1b76d8] content-stretch flex h-[69.713px] items-start left-[205px] px-[28.794px] py-[16.67px] rounded-[60.62px] top-[734.29px] w-[374.327px]" data-name="Main CTA">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.587] not-italic relative shrink-0 text-[22.732px] text-white tracking-[-0.682px] whitespace-nowrap">Srat or view your application</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[205px] top-[263.24px]">
      <Group />
      <MainCta />
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-4.5px)] top-0">
      <div className="absolute bottom-[4760px] h-[1031px] left-[-4px] w-[1930px]" data-name="Fade">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFade} />
      </div>
      <div className="-translate-y-1/2 absolute bg-gradient-to-b from-[rgba(24,59,86,0)] h-[1031px] left-[-12.13%] right-[-11.66%] rounded-[9.878px] to-[#152532] top-[calc(50%-2350px)] via-[24.519%] via-[rgba(22,49,70,0.45)]" data-name="Overlay" />
      <Group1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] h-[25px] leading-[1.177] not-italic relative shrink-0 text-[#1b76d8] text-[16px] tracking-[-0.48px] w-[218px]">Planning Portal</p>
    </div>
  );
}

function Frame() {
  return <div className="shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame5 />
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1">
      <Frame4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <p className="col-1 font-['Poppins:Bold',sans-serif] leading-[60px] ml-0 mt-[24px] not-italic relative row-1 text-[#0f213a] text-[50px] whitespace-nowrap">What this check will help you do</p>
      <Frame7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start leading-[30px] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f213a] text-[22px] w-full">{`Check property & location restrictions`}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#727272] text-[16px] w-full">{`Listed buildings, conservation areas, protected land, and local rules may limit what's permitted.`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[261px]">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[39px] items-center relative shrink-0">
      <div className="h-[295px] relative rounded-[20px] shrink-0 w-[258px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle5659} />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[340px] items-start pb-[20px] pl-[20px] pr-[52px] pt-[25px] relative rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] shrink-0 w-[630px]">
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start leading-[30px] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f213a] text-[22px] w-full">Identify your project type</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#727272] text-[16px] w-full">{`We'll narrow down whether you're planning an extension, conversion, garage, porch, or outbuilding.`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[261px]">
      <Frame14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[39px] items-center relative shrink-0">
      <div className="h-[295px] relative rounded-[20px] shrink-0 w-[258px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle5659} />
      </div>
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[340px] items-start pb-[20px] pl-[20px] pr-[52px] pt-[25px] relative rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] shrink-0 w-[630px]">
      <Frame11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start leading-[30px] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f213a] text-[22px] w-full">Understand the specific limits</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#727272] text-[16px] w-full">{`Height, size, storeys, roof changes, garden coverage, and boundary distances we'll check what matters.`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[261px]">
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[39px] items-center relative shrink-0">
      <div className="h-[295px] relative rounded-[20px] shrink-0 w-[258px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle5659} />
      </div>
      <Frame20 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[340px] items-start pb-[20px] pl-[20px] pr-[52px] pt-[25px] relative rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] shrink-0 w-[630px]">
      <Frame19 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start leading-[30px] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f213a] text-[22px] w-full">Spot wider site issues</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#727272] text-[16px] w-full">{`Flood risk, highways, trees, ecology, contamination, and archaeology can all affect what's possible.`}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[261px]">
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[39px] items-center relative shrink-0">
      <div className="h-[295px] relative rounded-[20px] shrink-0 w-[258px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle5659} />
      </div>
      <Frame24 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[340px] items-start pb-[20px] pl-[20px] pr-[52px] pt-[25px] relative rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] shrink-0 w-[630px]">
      <Frame23 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-start flex flex-wrap gap-[33px_30px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame17 />
      <Frame18 />
      <Frame22 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-start relative shrink-0 w-[1290px]">
      <Group4 />
      <Frame15 />
    </div>
  );
}

function DivZ() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e9f4ff] content-stretch flex items-center justify-center left-1/2 overflow-clip px-[228px] py-[96px] shadow-[0px_-4px_24px_-4px_rgba(70,75,78,0.2)] top-[calc(50%-1312.5px)] w-[1920px]" data-name="div.z-10">
      <Frame16 />
    </div>
  );
}

function Macbook2() {
  return (
    <div className="absolute h-[814.068px] left-[-406px] top-[3455px] w-[1464.791px]" data-name="Macbook2">
      <div className="absolute inset-[0_-16.82%_-21.32%_-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1763.45 987.596">
          <g id="Macbook2">
            <g filter="url(#filter0_d_1_429)" id="Group">
              <path d={svgPaths.p25348a00} fill="var(--fill-0, #E8ECF7)" id="Shape 3 copy 3" />
            </g>
            <path d={svgPaths.p2d995e80} fill="var(--fill-0, #F2F6FE)" id="Rectangle 1 copy 4" />
            <path d={svgPaths.p2ea33a40} fill="var(--fill-0, #C5CCDD)" id="Rectangle 2 copy 2" />
            <path d={svgPaths.p16f34400} fill="url(#paint0_linear_1_429)" id="Shape 3 copy 2" />
            <path d={svgPaths.p3ed781d0} fill="var(--fill-0, white)" id="Shape 2 copy 2" />
            <path d={svgPaths.pfc47bc0} fill="url(#paint1_linear_1_429)" id="Shape 4 copy 2" />
            <path d={svgPaths.p33007c00} fill="var(--fill-0, white)" id="screen" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="328.236" id="filter0_d_1_429" width="1763.45" x="0" y="659.36">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="97.1765" dy="22.5588" />
              <feGaussianBlur stdDeviation="75.4853" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0911979 0 0 0 0 0.117884 0 0 0 0 0.2125 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_429" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_429" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_429" x1="784.55" x2="784.55" y1="820.642" y2="781.2">
              <stop stopColor="#BBBECD" />
              <stop offset="0.27" stopColor="#D2D4DE" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_429" x1="784.274" x2="784.274" y1="791.561" y2="780.507">
              <stop stopColor="#C5DAE6" />
              <stop offset="0.27" stopColor="#D9E2F2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute contents left-[-406px] top-[3455px]" data-name="Hero image">
      <Macbook2 />
    </div>
  );
}

function Macbook() {
  return (
    <div className="absolute contents left-[-406px] top-[3455px]" data-name="Macbook">
      <HeroImage />
      <div className="absolute h-[728.414px] left-[-240.08px] rounded-[6px] top-[3492.76px] w-[1132.753px]" data-name="ARTWORK">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[100.5%] left-[-1.67%] max-w-none top-[-0.52%] w-[101.7%]" src={imgArtwork} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[-406px] top-[3455px]">
      <Macbook />
    </div>
  );
}

function Frame28() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Poppins:Bold',sans-serif] gap-[4px] items-start leading-[1.177] ml-0 mt-0 not-italic relative row-1 w-[550px]">
      <p className="h-[25.043px] relative shrink-0 text-[#1b76d8] text-[16px] tracking-[-0.48px] w-full">Still exploring ideas?</p>
      <p className="relative shrink-0 text-[#0f213a] text-[54px] tracking-[-1.62px] w-full">Interactive House</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content">
      <Frame28 />
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="01">
      <p className="col-1 font-['Poppins:Regular',sans-serif] leading-[30px] ml-0 mt-0 not-italic relative row-1 text-[#727272] text-[20px] w-[475px]">The Interactive House is a great place to start. It gives you a simple visual way to explore common home improvement projects before using this more detailed check.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[520px]">
      <Component4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-full">
      <Content1 />
      <Frame29 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#1b76d8] content-stretch flex gap-[10px] h-[56px] items-center justify-center not-italic overflow-clip px-[30px] py-[20px] relative rounded-[999px] shrink-0 text-[14px] text-white whitespace-nowrap">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[30px] relative shrink-0">Visit Interactive House</p>
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] relative shrink-0">arrow-right-long</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[65px] items-start left-[1119px] top-[3674px] w-[550px]">
      <Frame27 />
      <Frame2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[-406px] top-[3455px]">
      <Group6 />
      <Frame26 />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[1782.042px] left-[-424px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[418px_36px] mask-size-[1931.2px_1185px] top-[2069px] w-[2617.544px]" style={{ maskImage: `url('${imgBg}')` }} data-name="bg">
      <div className="absolute inset-[-3.82%_-4.64%_-7.41%_-4.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2862.09 1982.04">
          <g id="bg">
            <rect fill="var(--fill-0, #1D75D9)" height="1149.03" id="Rectangle 4" width="2000.53" x="541.099" y="104" />
            <g id="Vector 8" />
            <g filter="url(#filter0_f_1_439)" id="Vector 9">
              <path d={svgPaths.p2b62ab00} fill="var(--fill-0, #1B76D8)" />
            </g>
            <g filter="url(#filter1_f_1_439)" id="Ellipse 16">
              <ellipse cx="424.99" cy="145.858" fill="var(--fill-0, #FFBAF4)" rx="424.99" ry="145.858" transform="matrix(0.903763 -0.428034 0.310246 0.950656 1881.96 688.246)" />
            </g>
            <g filter="url(#filter2_f_1_439)" id="Ellipse 15">
              <ellipse cx="332.869" cy="142.357" fill="url(#paint0_linear_1_439)" rx="332.869" ry="142.357" transform="matrix(0.903763 -0.428034 0.310246 0.950656 123.099 1014.29)" />
            </g>
            <g filter="url(#filter3_f_1_439)" id="Vector 5">
              <path d={svgPaths.p3e6ddd00} fill="var(--fill-0, white)" />
            </g>
            <g filter="url(#filter4_f_1_439)" id="Vector 13">
              <path d={svgPaths.p107b2300} fill="var(--fill-0, #1D76D9)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1030.34" id="filter0_f_1_439" width="2156.04" x="480.893" y="56.625">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_439" stdDeviation="12" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="785.487" id="filter1_f_1_439" width="1101.57" x="1760.52" y="252.253">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_439" stdDeviation="82" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="721.016" id="filter2_f_1_439" width="936.198" x="3.8147e-06" y="646.638">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_439" stdDeviation="82" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1264.06" id="filter3_f_1_439" width="2470.88" x="272.099" y="717.982">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_439" stdDeviation="66" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="539.852" id="filter4_f_1_439" width="750.473" x="2031.1" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_439" stdDeviation="34" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_439" x1="435.65" x2="360.887" y1="84.0349" y2="294.659">
              <stop stopColor="#9651EE" />
              <stop offset="1" stopColor="#51C8EE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Macbook3() {
  return (
    <div className="absolute h-[814.068px] left-[817px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-823px_-186px] mask-size-[1931.2px_1185px] top-[2291px] w-[1464.791px]" style={{ maskImage: `url('${imgBg}')` }} data-name="Macbook2">
      <div className="absolute inset-[0_-16.82%_-21.32%_-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1763.45 987.598">
          <g id="Macbook2">
            <g filter="url(#filter0_d_1_415)" id="Group">
              <path d={svgPaths.p16f34400} fill="var(--fill-0, #E8ECF7)" id="Shape 3 copy 3" />
            </g>
            <path d={svgPaths.p2d995e80} fill="var(--fill-0, #F2F6FE)" id="Rectangle 1 copy 4" />
            <path d={svgPaths.p2ea33a40} fill="var(--fill-0, #C5CCDD)" id="Rectangle 2 copy 2" />
            <path d={svgPaths.p16f34400} fill="url(#paint0_linear_1_415)" id="Shape 3 copy 2" />
            <path d={svgPaths.p3ed781d0} fill="var(--fill-0, white)" id="Shape 2 copy 2" />
            <path d={svgPaths.pfc47bc0} fill="url(#paint1_linear_1_415)" id="Shape 4 copy 2" />
            <path d={svgPaths.p33007c00} fill="var(--fill-0, white)" id="screen" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="328.236" id="filter0_d_1_415" width="1763.45" x="0" y="659.362">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="97.1765" dy="22.5588" />
              <feGaussianBlur stdDeviation="75.4853" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0911979 0 0 0 0 0.117884 0 0 0 0 0.2125 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_415" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_415" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_415" x1="784.55" x2="784.55" y1="820.642" y2="781.2">
              <stop stopColor="#BBBECD" />
              <stop offset="0.27" stopColor="#D2D4DE" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_415" x1="784.274" x2="784.274" y1="791.561" y2="780.507">
              <stop stopColor="#C5DAE6" />
              <stop offset="0.27" stopColor="#D9E2F2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="absolute contents left-[817px] top-[2291px]" data-name="Hero image">
      <Macbook3 />
    </div>
  );
}

function Macbook1() {
  return (
    <div className="absolute contents left-[817px] top-[2291px]" data-name="Macbook">
      <HeroImage1 />
      <div className="absolute h-[728.414px] left-[982.92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-988.916px_-223.758px] mask-size-[1931.2px_1185px] rounded-[6px] top-[2328.76px] w-[1132.753px]" style={{ maskImage: `url('${imgBg}')` }} data-name="ARTWORK">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-full left-[0.05%] max-w-none top-0 w-[118.11%]" src={imgArtwork1} />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start ml-0 mt-0 relative row-1 w-[550px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.177] not-italic relative shrink-0 text-[54px] text-white tracking-[-1.62px] w-full">{`By the end, you'll understand whether your project`}</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Content">
      <Frame31 />
    </div>
  );
}

function Component5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="02">
      <p className="col-1 font-['Font_Awesome_6_Free:Solid',sans-serif] h-[26.982px] leading-[normal] ml-0 mt-[2.11px] relative row-1 text-[25px] w-[25px]">circle-check</p>
      <p className="col-1 font-['Poppins:Bold',sans-serif] leading-[30px] ml-[45px] mt-0 relative row-1 text-[22px] whitespace-nowrap">Is likely permitted development</p>
    </div>
  );
}

function Component() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="01">
      <p className="col-1 font-['Font_Awesome_6_Free:Solid',sans-serif] h-[26.982px] leading-[normal] ml-0 mt-[1.78px] relative row-1 text-[25px] w-[25px]">circle-check</p>
      <p className="col-1 font-['Poppins:Bold',sans-serif] leading-[30px] ml-[45px] mt-0 relative row-1 text-[22px] whitespace-nowrap">May need planning permission</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="3">
      <p className="col-1 font-['Font_Awesome_6_Free:Solid',sans-serif] h-[26.982px] leading-[normal] ml-0 mt-[1.78px] relative row-1 text-[25px] w-[25px]">circle-check</p>
      <p className="col-1 font-['Poppins:Bold',sans-serif] leading-[30px] ml-[45px] mt-0 relative row-1 text-[22px] whitespace-nowrap">Needs Building Control approval</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="4">
      <p className="col-1 font-['Font_Awesome_6_Free:Solid',sans-serif] h-[26.982px] leading-[normal] ml-0 mt-[1.78px] relative row-1 text-[25px] w-[25px]">circle-check</p>
      <p className="col-1 font-['Poppins:Bold',sans-serif] leading-[30px] ml-[45px] mt-0 relative row-1 text-[22px] whitespace-nowrap">Would benefit from professional advice</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start not-italic relative shrink-0 text-white w-[526px]">
      <Component5 />
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[84px] items-start leading-[0] left-[294px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-300px_-324px] mask-size-[1931.2px_1185px] top-[calc(50%-228px)] w-[550px]" style={{ maskImage: `url('${imgBg}')` }}>
      <Content2 />
      <Frame32 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents left-[-6px] top-[2105px]" data-name="background">
      <Bg />
      <Macbook1 />
      <Frame30 />
    </div>
  );
}

function Spacer() {
  return <div className="absolute inset-[0_0_79.02%_0]" data-name="Spacer" />;
}

function Question() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question">
      <p className="font-['Poppins:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#0f213a] text-[30px] text-center whitespace-nowrap">Need help?</p>
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex gap-[5px] items-end relative shrink-0 w-full" data-name="Question">
      <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[29px] min-h-px min-w-px not-italic relative text-[20px] text-black">{`Don't worry if you only have rough estimates — this tool is designed to help you explore what may be possible before committing to final plans.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] inset-[20.98%_0_0_0] items-start opacity-80 px-[30px] py-[19px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1b76d8] border-solid border-t-2 inset-0 pointer-events-none" />
      <Question />
      <Question1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[319px] top-[5361px] w-[1287px]">
      <div className="h-[143px] relative shrink-0 w-full" data-name="Need Help">
        <Spacer />
        <Container />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[319px] top-[5361px]">
      <Frame37 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[20px] text-white">{`The questions are designed for homeowners, landowners, and anyone without planning experience, so you do not need to know technical terms or planning rules before you begin. `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[60px] relative rounded-[999px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[30px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white whitespace-pre">{`Start  Now`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-[1226px]">
      <Frame42 />
      <Frame3 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-[#003a71] content-stretch flex flex-col h-[153px] items-center justify-center left-[-2px] pl-[168px] pr-[167px] py-[31px] top-[5638px] w-[1923px]">
      <Frame43 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-2px] top-[5638px]">
      <Frame44 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[318px] top-[4592px]" data-name="Mask group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[728px] left-[calc(50%-221px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[125px_34px] mask-size-[949px_705px] top-[calc(50%+2026.5px)] w-[1092px]" style={{ maskImage: `url('${imgIStock5016532921}')` }} data-name="iStock-501653292 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIStock5016532922} />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[1193px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[60px] min-w-full not-italic relative shrink-0 text-[50px] text-black w-[min-content]">Before you start</p>
    </div>
  );
}

function Title() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Title">
      <Frame35 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14px] items-start ml-0 mt-0 relative row-1 w-[1193px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-black w-full">{`To get the best result, it helps to have: `}</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="01">
      <Frame38 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0 w-full">
      <Title />
      <Component3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] h-[28px] leading-[normal] relative shrink-0 text-[#145a9d] text-[25px] w-[43px]">circle-check</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[30px] relative shrink-0 text-[22px] text-black w-[528.107px]">A simple idea of what you want to build, change, or convert</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] h-[28px] leading-[normal] relative shrink-0 text-[#145a9d] text-[25px] w-[43px]">circle-check</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[30px] relative shrink-0 text-[22px] text-black w-[528.107px]">Rough measurements — height, width, depth, or distance to boundaries</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] h-[28px] leading-[normal] relative shrink-0 text-[#145a9d] text-[25px] w-[43px]">circle-check</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[30px] relative shrink-0 text-[22px] text-black w-[528.107px]">Useful site details — nearby trees, previous extensions, access, or anything unusual</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start not-italic relative shrink-0 w-full">
      <Frame40 />
      <Frame41 />
      <Frame45 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-center justify-center relative shrink-0 w-[606px]">
      <Frame33 />
      <Frame39 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[584px] items-center justify-center left-[899px] pl-[61px] pr-[87px] py-[95px] rounded-[26px] shadow-[0px_4px_9.3px_0px_rgba(163,196,228,0.35)] top-[4667px] w-[706px]">
      <Frame34 />
    </div>
  );
}

function Frame1() {
  return <div className="shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center left-[899px] top-[4667px]">
      <Frame1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute contents left-[899px] top-[4667px]" data-name="Content">
      <Frame36 />
      <Frame6 />
    </div>
  );
}

function SpecialPost() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+1.5px)] top-[4592px]" data-name="Special post">
      <MaskGroup />
      <Content3 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Group9 />
      <DivZ />
      <Group7 />
      <Background />
      <Group8 />
      <Group5 />
      <SpecialPost />
    </div>
  );
}