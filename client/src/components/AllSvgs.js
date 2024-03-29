export const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
  </svg>
);

export const PowerBtn = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="power-off"
      className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
      />
    </svg>
  );
};

export const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const YinYang = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="yin-yang"
      className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
      />
    </svg>
  );
};

export const Anchor = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="anchor"
      className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
      />
    </svg>
  );
};

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  );
};

export const Design = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  );
};

export const Develope = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  );
};

export const Email = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="96.3 -4.7 45.1 46.2"
      style={{
        enableBackground: "new 96.3 -4.7 45.1 46.2",
      }}
      xmlSpace="preserve"
      id="mail-icon"
      {...props}
    >
      <path
        className="st0"
        d="M138.2 10.5H99.5c-1.7 0-3.1 1.4-3.1 3.1v24.8c0 1.7 1.4 3.1 3.1 3.1h38.7c1.7 0 3.1-1.4 3.1-3.1V13.6c0-1.7-1.4-3.1-3.1-3.1z"
      />
      <path
        className="st0"
        d="M125.6 30.7c-3.7-2.6-6.6-4.6-6.8-4.7l6.8 4.7zM118.9 26s16-11.1 21.4-14.8c-.5-.5-1.2-.8-2-.8H99.5c-.8 0-1.5.3-2 .8L118.9 26z"
        id="env-lid"
      />
      <path
        className="st1"
        d="M135.8 34.2h-33.9c-1.3 0-2.4-1.1-2.4-2.4V.7c0-1.3 1.1-2.4 2.4-2.4h33.9c1.3 0 2.4 1.1 2.4 2.4v31.1c-.1 1.3-1.1 2.4-2.4 2.4z"
        id="env-paper"
      />
      <path
        className="st2"
        d="M131.2,6.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,5.7,132.1,6.5,131.2,6.5z"
        id="env-line-3"
      />
      <path
        className="st2"
        d="M131.2,14.1h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,13.4,132.1,14.1,131.2,14.1z"
        id="env-line-2"
      />
      <path
        className="st2"
        d="M131.2,21.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,20.8,132.1,21.5,131.2,21.5z"
        id="env-line-1"
      />
      <path
        className="st3"
        d="M97.6 11.1c-.6.5-1.3 1.5-1.3 2.4v24.9c0 1.7 1.4 3.1 3.1 3.1h38.8c.8 0 1.4-.3 2-.7-3.1-2.1-42.6-29.7-42.6-29.7z"
      />
      <path
        className="st4"
        d="M140.3 11.2c-5.4 3.7-21.4 14.8-21.4 14.8.2.1 18.2 12.7 21.3 14.8.7-.6 1.2-1.4 1.2-2.3v-25c-.1-.9-.5-1.7-1.1-2.3z"
      />
    </svg>
  );
};

export const Whatsapp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M15 3C8.373 3 3 8.373 3 15c0 2.251.632 4.35 1.71 6.15L3.108 27l5.975-1.568A11.935 11.935 0 0 0 15 27c6.627 0 12-5.373 12-12S21.627 3 15 3zm-4.107 6.402c.195 0 .395 0 .568.008.214.005.447.02.67.514.265.586.842 2.056.916 2.205.074.149.126.324.023.52-.098.2-.149.32-.293.497-.149.172-.312.386-.447.516-.149.15-.303.312-.13.61.171.296.769 1.27 1.652 2.056 1.135 1.014 2.092 1.326 2.39 1.475.298.149.47.126.643-.074.177-.195.743-.865.943-1.163.195-.298.394-.246.664-.148.274.098 1.735.818 2.033.967.298.149.494.223.569.344.077.125.077.72-.17 1.414-.247.693-1.46 1.363-2.004 1.41-.55.05-1.061.246-3.568-.74-3.024-1.191-4.932-4.289-5.08-4.489-.15-.195-1.211-1.61-1.211-3.07 0-1.465.768-2.183 1.037-2.48.274-.299.595-.372.795-.372z" />
  </svg>
);

export const LinkedIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z" />
  </svg>
);

export const WhatsappOutlined = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.232-1.236a9.981 9.981 0 0 0 4.774 1.215h.004c5.505 0 9.985-4.48 9.988-9.985a9.922 9.922 0 0 0-2.922-7.066A9.923 9.923 0 0 0 12.012 2zm-.002 2a7.95 7.95 0 0 1 5.652 2.342 7.93 7.93 0 0 1 2.336 5.65c-.002 4.404-3.584 7.987-7.99 7.987a7.999 7.999 0 0 1-3.817-.971l-.673-.367-.745.175-1.968.465.48-1.785.217-.8-.414-.72a7.98 7.98 0 0 1-1.067-3.992C4.023 7.582 7.607 4 12.01 4zM8.477 7.375a.917.917 0 0 0-.666.313c-.23.248-.875.852-.875 2.08 0 1.228.894 2.415 1.02 2.582.123.166 1.726 2.765 4.263 3.765 2.108.831 2.536.667 2.994.625.458-.04 1.477-.602 1.685-1.185.208-.583.209-1.085.147-1.188-.062-.104-.229-.166-.479-.29-.249-.126-1.476-.728-1.705-.811-.229-.083-.396-.125-.562.125-.166.25-.643.81-.79.976-.145.167-.29.19-.54.065-.25-.126-1.054-.39-2.008-1.24-.742-.662-1.243-1.477-1.389-1.727-.145-.25-.013-.386.112-.51.112-.112.248-.291.373-.437.124-.146.167-.25.25-.416.083-.166.04-.313-.022-.438s-.547-1.357-.77-1.851c-.186-.415-.384-.425-.562-.432-.145-.006-.31-.006-.476-.006z" />
  </svg>
);
