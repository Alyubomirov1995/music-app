import Headling from '../../components/Headling/Headling';
import styles from './Check.module.scss';


export function Check() {
	return <>
		<Headling className={styles['headling']}>Запись на занятие</Headling>
      
		<div className={styles['personal']}>
			<div>
				<h1><i>Здесь будет календарь с обозначением свободного времени и форма для заполнения заявки на занятие</i></h1>
			</div>
		</div>
	</>;
}