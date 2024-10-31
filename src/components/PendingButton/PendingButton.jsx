const PendingButton = ({children, isPending , className, ...props}) => {
    return <button type="submit" disabled={isPending} className={className} {...props}>
        { isPending ? <div className="loader scale-50 mx-auto my-1"/> : children}
    </button>    
}

export default PendingButton;