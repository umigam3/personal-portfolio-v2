export default function Background() {
  return (
    <div className="w-full h-full fixed overflow-hidden -z-10">
      <div className="absolute -top-[200px] -left-[700px] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,.30),rgba(255,255,255,0))] animate-breathe" />
      <div className="absolute -top-[200px] -right-[700px] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,.30),rgba(255,255,255,0))] animate-breathe" />
    </div>
  );
}
