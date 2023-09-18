// Checks if Dark Theme applied in local storage or on the window object.  If so adds
//   the dark class and changes the text  on the header to "light".
const applyProperTheme = () => {
	const darkText = document.querySelector("#dark-text")
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark")
		darkText.textContent = "light"
	} else {
		document.documentElement.classList.remove("dark")
		darkText.textContent = "dark"
	}
}

// Toggles between dark and light theme when user clicks a selection
let toggleDarkLight = () => {
	const darkIcon = document.querySelector("#dark-icon")

	darkIcon.addEventListener("click", (e) => {
		e.preventDefault()
		if (localStorage.theme === "light") {
			localStorage.theme = "dark"
		} else {
			localStorage.theme = "light"
		}
		applyProperTheme()
	})
}

// Upon startup, listens to the window object to see if a preference has been set in the browser
// Depending on what's selected - it sets local storage to the proper theme
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (e) {
		const colorScheme = e.matches ? "dark" : "light"
		localStorage.theme = colorScheme
		applyProperTheme()
	})
