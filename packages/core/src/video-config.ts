export type VideoConfig = {
	width: number;
	height: number;
	fps: number;
	durationInFrames: number;
	id: string;
	defaultProps: Record<string, unknown>;
	props: Record<string, unknown>;
};
