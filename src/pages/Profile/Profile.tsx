
import Headling from '../../components/Headling/Headling';
import styles from './Profile.module.scss';


export function Profile() {
	return <>
		<Headling className={styles['headling']}>Моя страница</Headling>
		<div className={styles['avatar']}>
			<img id="avatar" src="/avatarka.svg" alt="Аватарка" />
		</div>
		<div className={styles['profile']}>
			<div className={styles['personal']}>
				<div>
					<h1>Всеволод Андреевич Вертолётов</h1>
				</div>
				<div>
					<p>Стаж занятий: 1 год</p>
					<p>Возраст: 21 год</p>
					<p>тембр голоса: Баритон</p>
					<p>Стиль вокала: эстрадный</p>
					<p><i>Здесь будет форма для записей учеником информации о себе</i></p>
				</div>
			</div>
			<div className={styles['song']}></div>
			<div>
				<h1>репертуар</h1>
				<p>Сплин - Романс</p>
				<p>Бутусов - Прогулки по воде</p>
				<p>Гражданская оборона - Всё идёт по плану</p>
				<p><i>Здесь будет форма для добавления новых песен</i></p>
			</div>
		</div>
	</>;
}