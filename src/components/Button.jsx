function Button({...props}) {
  return (
    <button
      className="text-center bg-brand-100 px-10 py-1 uppercase font-bold text-2xl shadow-[4px_4px_0_0_#101320] hover:-translate-y-0.5 active:translate-y-0.5 transition-transform">
      <a href="/" className="font-pixel">{props.children}</a>
    </button>
  );
  
}

export default Button;