export const notFound = (
  <div className="max-w-[600px] mx-auto mt-[180px]">
    <div className="flex gap-9">
      <div className="text-[15px] font-sans">
        <a href="https://www.google.com/">
          <img src="/images/logo.png" width={141} height={54} className="select-none" />
        </a>
        <p className="mt-[11px] mb-[22px]">
          <span className="font-semibold">404.</span>&nbsp;
          <span className="text-[#90867d]">That’s an error.</span>
        </p>
        <p className="max-w-[390px]">
          <span>The requested URL was not found on this server.</span>&nbsp;
          <span className="text-[#90867d]">That’s all we know.</span>
        </p>
      </div>
      <img src="/images/robot.png" className="-mt-7 select-none" />
    </div>
  </div>
);
