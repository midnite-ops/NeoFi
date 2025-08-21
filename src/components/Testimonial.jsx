import profile from "../assets/profile.svg";
function Testimonial() {
  const names = [
    "Eleanor Pena",
    "Jerome Bell",
    "Darell Steward",
    "Bessie Copper",
    "Kathryn Murphy",
    "Guy Hawkins",
  ];
  const row1 = [];
  const row2 = [];
  function generateRows(value, num) {
    for (let i = 0; i < names.length; i++) {
      const items = names[i];
      if (i === num) {
        break;
      } else {
        value.push(
          <div
            key={i}
            className="border border-grayBorder rounded-[20px] p-8 space-y-8 w-[373px]"
          >
            <p className="text-start">
              “AI streamlines international client coordination by scheduling
              emails for optimal inbox timing.”
            </p>
            <div className="flex items-start gap-4">
              <img src={profile} alt="a profile pic" />
              <div>
                <p>{items}</p>
                <p className="text-xs text-grayT text-start">Co-founder</p>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  generateRows(row1, 4);
  generateRows(row2, 5);

  return (
    <section
      id="testimonial"
      className="box bg-gray  left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden relative"
    >
      <div className="center">
        <div className="text-center">
          <div className="border-btn">Testimonial</div>
        </div>
        <h1>Trusted By Investors</h1>
        <p className="gray-text">
          Secure your digital assets with the peace of mind that comes from
          knowing you are protected by the best technology in the blockchain
          space.
        </p>
      </div>
      {/** Shaodow to the left and right */}
      <div className="pointer-events-none absolute left-0 bottom-10 md:h-[452px] h-[218px] w-35 bg-gradient-to-r md:from-black/60 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 bottom-10 md:h-[452px] h-[218px] w-35 bg-gradient-to-l md:from-black/60  to-transparent z-10"></div>

      <div className="flex gap-4 flex-col ">
        <div className="md:flex gap-5 justify-center animate-slide-right hidden">
          {row1}
        </div>
        <div className="flex gap-5 justify-center ">{row2}</div>
      </div>
    </section>
  );
}

export default Testimonial;
