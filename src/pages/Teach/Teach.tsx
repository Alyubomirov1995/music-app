
import Headling from '../../components/Headling/Headling';
import styles from './Teach.module.scss';


export function Teach() {
	return <>
		<Headling className={styles['headling']}>Педагог</Headling>
		
		<div className={styles['personal']}>
			<div>
				<h1><i>Здесь будет страница педагога с фото, информацией о себе, а так же с медиа материалами для домашних занятий</i></h1>
			</div>
		</div>
	</>;
}