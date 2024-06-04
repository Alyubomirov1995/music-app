import Headling from '../../components/Headling/Headling';
import styles from './Media.module.scss';


export function Media() {
	return <>
		<Headling className={styles['headling']}>Медиа</Headling>
		<div className={styles['personal']}>
			<div>
				<h1><i>Личные медифайлы ученика, которые ему могут быть нужны для занятий (минусовки, распевки, ноты...)</i></h1>
			</div>
		</div>
	</>;
}