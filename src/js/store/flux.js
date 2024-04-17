const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: {},
			locations: {},
			episodes: {},
			favorites: [], //lo creamos aquí porque lo vamos a utlizar desde diferentes sitios (las diferentes cartas)
			detailsInfo: {}

		},
		actions: {
			getCharacters: async (url) => { //le pasamos la url como parámetro
				const response = await fetch(url); //pasamos la url de la página de characters como parámetro para poderla hacer dinámica, y poder ir desplazándonos por la paginación. Dentro del appContext en el useEffect le pasamos la url
				const data = await response.json();
				setStore({ characters: data })
			},

			getLocations: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({ locations: data })
			},


			getEpisodes: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({ episodes: data })
			},

			setFavorites: (name) => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] })
				} else {
					setStore({ favorites: store.favorites.filter((favName) => favName != name) })
				}

			},
		}
	}
}

export default getState;
