interface ButtonProps {
    label: string;
    action?: () => void;
}


export const Button = ({ label, action }: ButtonProps) => {
    return (
        <button className="bg-tertiary text-primary hover:bg-white font-bold py-2 px-4 rounded-xl"
            onClick={action}
        >
            {label}
        </button>
    );
};
