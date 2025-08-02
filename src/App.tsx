import "./App.css";

const projects = [
  {
    name: "Piano Music Modes",
    slug: "piano-music-modes",
    image: "https://vyk2rr.github.io/piano-music-modes/social-preview.png",
    link: "https://vyk2rr.github.io/piano-music-modes/",
  },
  // {
  //   name: "Mind Oscillator",
  //   slug: "mind-oscillator",
  //   image: "https://vyk2rr.github.io/mind-oscillator/social-preview.png",
  //   link: "https://vyk2rr.github.io/Mind-Oscillator/",
  // },
  {
    name: "Piano Chords Cheat Sheet",
    slug: "piano-chords-cheat-sheet",
    image: "https://vyk2rr.github.io/piano-chords-cheat-sheet/social-preview.png",
    link: "https://vyk2rr.github.io/piano-chords-cheat-sheet/",
  },
  // {
  //   name: "Piano Style Gallery",
  //   slug: "piano-style-gallery",
  //   image: "https://vyk2rr.github.io/piano-style-gallery/social-preview.png",
  //   link: "https://vyk2rr.github.io/piano-style-gallery/",
  // },
  {
    name: "Music Memory",
    slug: "music-memory",
    image: "https://vyk2rr.github.io/music-memory/social-preview.png",
    link: "https://vyk2rr.github.io/music-memory/",
  },
  {
    name: "Five Strings Guitar",
    slug: "five-strings-guitar",
    image: "https://vyk2rr.github.io/five-strings-guitar/social-preview.png",
    link: "https://vyk2rr.github.io/five-strings-guitar/",
  },
  // {
  //   name: "Project Resonance",
  //   slug: "project-resonance",
  //   image: "https://vyk2rr.github.io/project-resonance/social-preview.png",
  //   link: "https://vyk2rr.github.io/ProjectResonance/",
  // },
  // {
  //   name: "Sonid en JavaScript",
  //   slug: "sonid-en-javascript",
  //   image: "https://vyk2rr.github.io/sonido-en-javascript/social-preview.png",
  //   link: "https://vyk2rr.github.io/sonido-en-javascript/",
  // },
];

export default function App() {
  return (
    <main>
      <section className="hub-grid">
        {projects.map(({ slug, name, image, link }) => (
          <a
            key={slug}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hub-card"
          >
            <div className="hub-card-image">
              <img src={image} alt={name} />
            </div>
            <div className="hub-card-title">
              {name}
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}