import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center items-center">
			<div className="flex flex-col text-center gap-4 w-full rounded-lg max-w-xs bg-slate-800 px-4 py-6">
				<h1 className="font-medium tracking-widest uppercase text-lg">Strings</h1>
				<Link
					className="bg-slate-900 rounded-md p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 transition-colors"
					href="/signin">
					Sign in
				</Link>
				<Link
					className="bg-slate-900 rounded-md p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 transition-colors"
					href="/signup">
					Sign Up
				</Link>
			</div>
		</div>
	);
}
