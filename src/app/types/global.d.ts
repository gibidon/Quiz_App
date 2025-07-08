// declare module '*.scss' {
//   interface ClassNames {
//     [className: string]: string;
//   }
//   const classNames: ClassNames;
//   export = classNames;
// }

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
