import { FaTrophy, FaClock, FaUsers } from "react-icons/fa6";

const FORM_LINK = "https://forms.gle/CBSaHQid3N5jWEdX7"; 

export default function HackathonSection() {
	return (
		<section className="py-20 sm:py-28 px-4 sm:px-6 bg-(--bg-main) transition-colors duration-500">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
						<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
						Hackathon
					</div>
					<h2 className="text-3xl sm:text-4xl font-black mb-3 text-(--text-main)">
						Build. Ship. Win.
					</h2>
					<p className="text-(--text-muted) max-w-2xl mx-auto font-light">
						Join our 24-hour hackathon to prototype ideas, collaborate with peers, and compete for exciting prizes. Students, early-stage founders and makers are all welcome.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
					<div className="p-6 rounded-2xl bg-(--section-alt-bg) border border-(--stat-card-border) text-(--text-main)">
						<div className="flex items-center gap-3 mb-3">
							<FaClock size={20} className="text-primary" />
							<h3 className="font-bold">When</h3>
						</div>
						<p className="text-(--text-muted)">July 11, 2026 · 24 hours</p>
					</div>

					<div className="p-6 rounded-2xl bg-(--section-alt-bg) border border-(--stat-card-border) text-(--text-main)">
						<div className="flex items-center gap-3 mb-3">
							<FaUsers size={20} className="text-primary" />
							<h3 className="font-bold">Who</h3>
						</div>
						<p className="text-(--text-muted)">Teams of up to 4 — students, mentors and makers welcome.</p>
					</div>

					<div className="p-6 rounded-2xl bg-(--section-alt-bg) border border-(--stat-card-border) text-(--text-main)">
						<div className="flex items-center gap-3 mb-3">
							<FaTrophy size={20} className="text-primary" />
							<h3 className="font-bold">Prizes</h3>
						</div>
						<p className="text-(--text-muted)">Cash prizes, mentorship, and access to partner programs.</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-[2rem] bg-gradient-to-r from-primary/6 to-accent-pink/4 border border-(--stat-card-border)">
					<div className="flex-1">
						<h4 className="text-xl font-black text-(--text-main) mb-2">Ready to compete?</h4>
						<p className="text-(--text-muted) max-w-xl">Register your team by filling the short form. We use this to share updates, team confirmations, and hackathon logistics.</p>
					</div>

					<div className="flex-shrink-0">
						<a
							href={FORM_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-transform duration-200"
						>
							Register Now
							<span className="text-xl">→</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
