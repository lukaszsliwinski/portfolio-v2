export default function TechBallMobile({ techIcon }: { techIcon: string }) {
  return (
    <div
      className="flex justify-center items-center w-[4.5rem] h-[4.5rem] rounded-full"
      style={{ background: "radial-gradient(circle at 5px 5px, #607785, #000)" }}
    >
      <img src={techIcon} className="w-9 h-9 opacity-75"></img>
    </div>
  );
}