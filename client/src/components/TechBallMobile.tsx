// TechBallMobile component to render a tech icon inside a styled div
export default function TechBallMobile({ techIcon }: { techIcon: string }) {
  return (
    <div
      className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full"
      style={{ background: 'radial-gradient(circle at 5px 5px, #607785, #000)' }}
    >
      <img src={techIcon} className="h-9 w-9 opacity-75"></img>
    </div>
  );
}
