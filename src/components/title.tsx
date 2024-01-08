export default function Title({ title }: { title: string }) {
  return (
    <>
      <div className="flex gap-3 justify-center">
        <div className="max-w-[1400px] w-full mx-auto flex items-center gap-6 md:gap-3 2xl::gap-0">
          <div className="w-2/5">
            <div className="border-t-[1px]"></div>
          </div>

          <div className="w-1/5 shrink-0  ">
            <h1 className="text-center text-lg md:text-4xl">{title}</h1>
          </div>

          <div className="w-2/5">
            <div className="border-t-[1px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
