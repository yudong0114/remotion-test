import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Remotionで初めての動画作成',
					titleColor: 'Green',
					subTitleText: '〜サブタイトル〜',
				}}
			/>
		</>
	);
};
