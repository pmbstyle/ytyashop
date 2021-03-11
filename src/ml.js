import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
	initial: 'russian',
	save: process.env.NODE_ENV === 'production',
	languages: [
		new MLanguage('russian').create({
			language: 'Language: ',
			cart:'Корзина ({0})',
			discord: 'Наш Discord',
			serverOnline: '{0} игроков онлайн',
			discordOnline: '{0} участников онлайн',
			welcome: '<span class="color-orange">Добро пожаловать</span> в наш магазин.',
			welcome2: '<strong>ytya<span class="color-orange">Ru</span></strong> - комплекс серверов выживания, где каждый найдет для себя тот самый идеальный сервер. Все вырученные средства идут на поддержку и развитие проекта.',
			welcome3: 'Спасибо за ваш вклад!',
			chooseServer: 'Выберите <span>сервер</span>'
		}),
		new MLanguage('english').create({
			language: 'Язык: ',
			cart:'Cart ({0})',
			discord: 'Our Discord',
			serverOnline: '{0} players online',
			discordOnline: '{0} members online',
			welcome: '<span class="color-orange">Welcome</span> to our store.',
			welcome2: '<strong>ytya<span class="color-orange">Ru</span></strong> - is a complex of survival servers, where everyone will find the perfect server for themselves. All proceeds are used to support and develop the project.',
			welcome3: 'Thanks for your input!',
			chooseServer: 'Choose <span>your server</span>'

		})
	]
})