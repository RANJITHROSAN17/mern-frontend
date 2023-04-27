type CheckboxData = {
     itemName: string,
     onToggle: (itemName: string) => void,
      //Color takes the form of tailwind text-{color}-{shade}
      Color?: CheckboxColors | string,
      defaultChecked?: boolean,
     };

type CheckboxManager = ({
    checked: boolean,
} & CheckboxData)[];

enum CheckboxColors {
    slate = "text-slate-500",
    red ="text-red-600", 
    green ="text-green-600",
    orange = "text-orange-600",
    yellow  = "text-yellow-600",
    lime = "text-lime-600",
    cyan = "text-cyan-600",
    blue =  "text-blue-600"
}