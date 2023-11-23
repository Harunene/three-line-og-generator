// components/Preview.tsx
interface PreviewProps {
  title1: string;
  title2: string;
  title3: string;
}

const Preview: React.FC<PreviewProps> = ({ title1, title2, title3 }) => (
  <div
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
      fontSize: 100,
      letterSpacing: -2,
      fontWeight: 700,
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      style={{
        display: 'flex',
        padding: '5px 40px',
        width: 'auto',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontFamily: 'Noto Sans CJK TC Bold',
      }}
    >
      {title1}
    </div>
    <div
      style={{
        padding: '5px 40px',
        width: 'auto',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontFamily: 'Noto Sans CJK TC Bold',
      }}
    >
      {title2}
    </div>
    <div
      style={{
        padding: '5px 40px',
        width: 'auto',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontFamily: 'Noto Sans CJK TC Bold',
      }}
    >
    {title3}
    </div>
  </div>
)

export default Preview
