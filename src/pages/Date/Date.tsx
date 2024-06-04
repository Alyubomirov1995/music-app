
import Headling from '../../components/Headling/Headling';
import styles from './Date.module.scss';

export function Date() {

	return <>
		<div className={styles['head']}>
			<Headling>Расписание</Headling>
		</div>
		<div className={styles['personal']}>
			<div>
				<h1>Вы записаны на следующие занятия</h1>
			</div>
			<div>
				<p>15 июня 19:00</p>
				<p>21 июня 18:00</p>
				<p>27 июня 19:00</p>
				<p>1 июля 15:00</p>
				<p><i></i></p>
			</div>
		</div>
	</>;
}
