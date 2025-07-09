export type ReactSVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

declare module "*.svg" {
  export const ReactComponent: ReactSVGComponent;
	export const src: string;
}
