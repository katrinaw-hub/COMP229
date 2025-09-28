// b) Custom logo in/near the nav
export default function Logo({ size = 40 }) {
    return (
        <img
            src="/logo.svg"
            alt="Site logo"
            width={size}
            height={size}
            style={{ display: 'block' }}
        />
    )
}