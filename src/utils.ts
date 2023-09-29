const icons = ["👍", "👍", "👍", "", "", "👍", "", ""];

export function generateIcons() {
	return [...icons, ...icons].sort(() => 0.5 - Math.random());
}
