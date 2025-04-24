//Arror Left Icon
export const ArrowLeftIcon = ({ width = '16px', height = '16px', color = '#18181C' }) =>
    <svg width={width} height={height} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.52358 7.56824L16.3083 7.56824" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.48657 13.5926L1.52338 7.56858L7.48657 1.54358" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

//User Icon
export const UserIcon = ({ width, height, className = 'layout-header-icon', color = "#18181C", strokeWidth = 1.5 }) => <svg className={className} width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6745 22.0815C8.03572 22.0815 4.92822 21.507 4.92822 19.2063C4.92822 16.9055 8.016 14.7815 11.6745 14.7815C15.3134 14.7815 18.4209 16.8849 18.4209 19.1857C18.4209 21.4855 15.3332 22.0815 11.6745 22.0815Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6673 11.5933C14.0554 11.5933 15.9908 9.62958 15.9908 7.20686C15.9908 4.78413 14.0554 2.81958 11.6673 2.81958C9.2794 2.81958 7.34304 4.78413 7.34304 7.20686C7.33498 9.6214 9.257 11.5851 11.6369 11.5933C11.6476 11.5933 11.6575 11.5933 11.6673 11.5933Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>


//Male Gender Icon
export const MaleGenderIcon = ({ width = '24', height = '24', className, color }) => <svg className={className} width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.51611 11.7421C6.51611 7.92552 9.56593 4.83044 13.3286 4.83044C17.0912 4.83044 20.1411 7.92552 20.1411 11.7421C20.1411 15.5596 17.0912 18.6538 13.3286 18.6538C9.56593 18.6538 6.51611 15.5596 6.51611 11.7421Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.37061 20.709L8.45363 16.5674M4.47125 17.6711L7.36303 20.6058" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Female Gender Icon
export const FemaleGenderIcon = ({ width = '24', height = '24', className, color }) =>
    <svg className={className} width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.3777 14.3047C17.3777 17.9491 14.4658 20.9033 10.8737 20.9033C7.28247 20.9033 4.37061 17.9491 4.37061 14.3047C4.37061 10.6612 7.28247 7.70691 10.8737 7.70691C14.4658 7.70691 17.3777 10.6612 17.3777 14.3047Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.1414 5.02073L15.5308 9.69858M20.1297 9.19875L20.1383 5.01904L16.0186 5.02769" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

//Image Icon
export const ImageAddIcon = ({ width = '56', height = '56', className = 'image-add-icon', color = "#B0B0B0", strokeWidth = "1.5" }) => <svg className={className} width={width} height={height} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4473 27.9773H41.5527" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 14.2273V41.7273" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Color not used with this commonent
export const ArrowDownIcon = ({ width = '17', height = '17', className = 'arrow-down-icon', color = '#18181C', strokeWidth = 1, style }) => <svg style={style} width={width} height={height} className={className} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2277 6.4364L8.62803 11.1031L4.02832 6.4364" strokeLinecap="round" strokeLinejoin="round" stroke={color} strokeWidth={strokeWidth} />
</svg>

//Location Icon
export const LocationIcon = ({ width = '17', height = '17', className = 'location-icon', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.2925 11.4617C14.2925 10.0804 13.1893 8.96118 11.8289 8.96118C10.4674 8.96118 9.36426 10.0804 9.36426 11.4617C9.36426 12.8419 10.4674 13.9612 11.8289 13.9612C13.1893 13.9612 14.2925 12.8419 14.2925 11.4617Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.8275 21.9612C10.6462 21.9612 4.43555 16.8596 4.43555 11.5245C4.43555 7.34782 7.74448 3.96118 11.8275 3.96118C15.9104 3.96118 19.2203 7.34782 19.2203 11.5245C19.2203 16.8596 13.0087 21.9612 11.8275 21.9612Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const FilledLocationIcon = ({ width = '17', height = '17', className = 'filled-location-icon', color = '#18181C', fillColor }) => <svg width={width} height={height} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.2634 12.3944C9.00159 12.3944 7.97474 11.3127 7.97474 9.98236C7.97474 8.65201 9.00159 7.56939 10.2634 7.56939C11.5253 7.56939 12.5513 8.65201 12.5513 9.98236C12.5513 11.3127 11.5253 12.3944 10.2634 12.3944ZM14.9579 4.59837C13.6777 3.2063 12.0103 2.4393 10.2634 2.4393C8.51491 2.4393 6.84753 3.2063 5.56645 4.59925C4.26614 6.01335 3.55202 7.91322 3.60805 9.81221C3.76609 15.1936 9.77843 19.3839 10.0351 19.5593L10.2601 19.7136L10.4875 19.5619C10.7434 19.3909 16.7599 15.302 16.9188 9.81133C16.974 7.91322 16.2591 6.01247 14.9579 4.59837Z" fill={color} />
</svg>

//Apple Logo
export const AppleLogo = ({ width = '24', height = '24', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M19.1443 16.8198C18.3413 16.3808 17.7803 15.6128 17.6023 14.6968C17.3213 13.4638 17.8093 12.1908 18.8643 11.4418C18.9693 11.3588 19.2173 11.1658 19.2453 10.8438C19.2733 10.5278 19.0703 10.2998 19.0153 10.2388C18.0243 9.04781 16.4603 8.47281 14.9373 8.74681C14.3873 8.84181 13.8423 9.01281 13.3143 9.25681C12.8413 9.48081 12.2823 9.47081 11.8223 9.23481C9.79626 8.17581 7.28726 8.87681 6.10726 10.8338C5.44126 11.8658 5.12026 13.1148 5.20126 14.3198C5.20526 15.5068 5.42926 16.6738 5.86226 17.7788C6.35626 19.1458 7.13926 20.4168 8.09026 21.4138C8.58926 22.0628 9.34826 22.4108 10.1133 22.4098C10.5503 22.4098 10.9893 22.2968 11.3823 22.0618C12.2113 21.6268 13.2133 21.6088 14.0113 21.9818C15.2513 22.7568 16.8733 22.4228 17.6663 21.2688C18.5103 20.3058 19.1593 19.2168 19.5983 18.0198C19.8143 17.4108 19.7193 17.1538 19.1443 16.8198Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.4826 8.38828H12.4896C13.7136 8.37128 14.7806 7.88228 15.4946 7.00828C16.2026 6.14028 16.4676 5.00628 16.2416 3.81528C16.1946 3.56728 15.9646 3.38928 15.7186 3.40928C14.5796 3.48128 13.5656 3.98328 12.8646 4.82528C12.1526 5.67728 11.8376 6.78628 11.9756 7.94828C12.0056 8.19928 12.2296 8.38828 12.4826 8.38828Z" fill={color} />
</svg>

//GoogleLogo
export const GoogleLogo = ({ width = '24', height = '24', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.7847 14.618C21.8927 14.068 21.9467 13.488 21.9467 12.908C21.9467 12.516 21.9207 12.134 21.8707 11.761C21.8337 11.487 21.5897 11.288 21.3137 11.288H13.5087C13.1987 11.288 12.9467 11.54 12.9467 11.85V14.056C12.9467 14.366 13.1987 14.618 13.5087 14.618H17.7837C17.9597 14.618 18.0887 14.798 18.0227 14.961C17.0877 17.271 14.6327 18.787 11.8907 18.28C9.78471 17.891 8.05871 16.221 7.60671 14.128C6.83971 10.576 9.52371 7.43808 12.9467 7.43808C14.0687 7.43808 15.1087 7.77508 15.9757 8.35208C16.2077 8.50608 16.5107 8.49108 16.7067 8.29208L18.4087 6.55908C18.6407 6.32208 18.6267 5.92808 18.3627 5.72708C16.9217 4.63108 15.1397 3.96508 13.2017 3.91208C8.32971 3.77708 4.11071 7.73508 3.95171 12.606C3.78471 17.714 7.87871 21.908 12.9467 21.908C17.3297 21.908 20.9837 18.768 21.7847 14.618Z" fill={color} />
</svg>

//Close Icon 
export const CloseIcon = ({ width = '25', height = '25', color = '#FFFFFF', strokeColor = '#000000', className = 'close-icon', strokeWidth = '1.5', onClick }) => <svg onClick={onClick} className={className} width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.44629 15.8108C1.44629 7.51185 8.17393 0.78421 16.4729 0.78421C24.7719 0.78421 31.4995 7.51185 31.4995 15.8108C31.4995 24.1098 24.7719 30.8374 16.4729 30.8374C8.17393 30.8374 1.44629 24.1098 1.44629 15.8108Z" fill={color} />
    <path d="M1.44629 15.8108C1.44629 7.51185 8.17393 0.78421 16.4729 0.78421C24.7719 0.78421 31.4995 7.51185 31.4995 15.8108C31.4995 24.1098 24.7719 30.8374 16.4729 30.8374C8.17393 30.8374 1.44629 24.1098 1.44629 15.8108Z" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M11.4771 10.6797L21.592 20.9419" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.592 10.6797L11.4771 20.9419" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const CloseIconRed = ({ width = '23', height = '23', color = '#FFFFFF', strokeColor = '#000000', className = 'close-icon', strokeWidth = '1.5', onClick }) => <svg width={width} height={height} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11.3474C1 5.63269 5.63269 1 11.3474 1C17.0621 1 21.6948 5.63269 21.6948 11.3474C21.6948 17.0621 17.0621 21.6948 11.3474 21.6948C5.63269 21.6948 1 17.0621 1 11.3474Z" fill="#D10B0B" />
    <path d="M1 11.3474C1 5.63269 5.63269 1 11.3474 1C17.0621 1 21.6948 5.63269 21.6948 11.3474C21.6948 17.0621 17.0621 21.6948 11.3474 21.6948C5.63269 21.6948 1 17.0621 1 11.3474Z" stroke={color} trokeWidth="2" />
    <pat d="M7.69629 7.59741L15.0887 15.0974" stroke={color} trokeWidth="1.5" strokeLincap="round" strokeLinejoin="round" />
    <path d="M15.0887 7.59741L7.69629 15.0974" stroke={color} trokeWidth="1.5" strokeLincap="round" strokeLinejoin="round" />
</svg>

export const HomeIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.31201 11.1567V21.2776C5.31201 23.2516 6.88958 24.8521 8.83526 24.8521H19.0458C20.9915 24.8521 22.5691 23.2516 22.5691 21.2776V11.1567" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.289 12.5343L15.6348 5.58386C14.6412 4.78699 13.2381 4.78699 12.2446 5.58386L3.59033 12.5343" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.4575 6.68604V9.43181" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.23 24.8521V20.5137C11.23 19.5797 11.23 19.1126 11.4012 18.7525C11.5706 18.396 11.8542 18.1081 12.2056 17.9363C12.5607 17.7626 13.021 17.7626 13.9417 17.7626C14.8623 17.7626 15.3226 17.7626 15.6776 17.9363C16.029 18.1081 16.3127 18.396 16.4821 18.7525C16.6533 19.1126 16.6533 19.5797 16.6533 20.5137V24.8521" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const NotificationIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon', onClick }) => <svg onClick={onClick} className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9351 3.85205C8.83601 3.85205 6.6205 8.5365 6.6205 11.6332C6.6205 13.9476 6.95124 13.2665 5.6885 16.0898C4.14651 20.1132 10.3474 21.7576 13.9351 21.7576C17.5218 21.7576 23.7227 20.1132 22.1818 16.0898C20.919 13.2665 21.2498 13.9476 21.2498 11.6332C21.2498 8.5365 19.0332 3.85205 13.9351 3.85205Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5915 24.8497C15.1031 26.5364 12.7814 26.5564 11.2788 24.8497" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const DiscoverIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon', strokeWidth = 2 }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.65039 18.363L11.4819 12.4255L17.3341 10.5674L15.5027 16.5048L9.65039 18.363Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.4924 25.6779C19.5962 25.6779 24.5443 20.6578 24.5443 14.4651C24.5443 8.27247 19.5962 3.25232 13.4924 3.25232C7.38855 3.25232 2.44043 8.27247 2.44043 14.4651C2.44043 20.6578 7.38855 25.6779 13.4924 25.6779Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const DoubleHeartIcon = ({ width = '25', height = '25', color = "#4B164C", strokeWidth = 2, className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.3306 16.1227C20.3283 13.1895 18.3837 10.4561 15.3539 10.455C14.5696 10.4561 13.7986 10.6491 13.1039 11.0146C12.4079 11.3812 11.8764 12.1225 11.4233 12.7718C10.6815 12.5175 9.82338 12.2315 9.04914 12.345C8.27488 12.4585 7.53867 12.7559 6.89869 13.2134C4.43945 15.0148 4.41931 18.3794 6.10319 20.7643C8.73697 24.5591 15.4311 25.4184 15.4311 25.4184C15.4311 25.4184 20.306 20.8392 20.3306 16.1227Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9402 12.0686C11.6403 11.241 11.4479 10.3636 11.4355 9.4861C11.4355 6.86619 13.1765 4.43017 15.8786 4.41882C16.5868 4.43017 17.2715 4.5891 17.8959 4.91828C18.5202 5.24634 18.9878 5.90473 19.3962 6.48933C20.0687 6.25776 20.825 6.00235 21.5097 6.11132C22.2057 6.20894 22.8669 6.46435 23.4431 6.87868C25.6282 8.49853 25.6517 11.4964 24.1514 13.6283C23.2383 14.9552 21.7615 15.869 20.3215 16.5025" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ChatBubbleIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.0715 23.167C18.5571 26.7329 13.3532 27.5033 9.09463 25.5052C8.46595 25.2484 7.95053 25.0408 7.46053 25.0408C6.0957 25.049 4.39689 26.3917 3.51397 25.497C2.63105 24.6011 3.95543 22.8762 3.95543 21.4831C3.95543 20.9859 3.75897 20.4723 3.50588 19.8333C1.53549 15.5134 2.29591 10.232 5.81026 6.66723C10.2965 2.11399 17.5852 2.11399 22.0715 6.66605C26.5658 11.2263 26.5577 18.6149 22.0715 23.167Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.47 15.4007H18.4803" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.8599 15.4007H13.8702" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.24976 15.4007H9.26011" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const CoinIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3113 17.6031C23.3113 19.173 20.8801 20.4466 17.8817 20.4466C14.8833 20.4466 12.4531 19.173 12.4531 17.6031" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99948 15.0781C7.00103 15.0781 4.56982 13.8056 4.56982 12.2346" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.56982 7.26257V17.2083C4.56982 18.7793 7.00103 20.0517 9.99948 20.0517" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99948 10.1057C7.00103 10.1057 4.56982 8.83327 4.56982 7.26227C4.56982 5.69242 7.00103 4.41882 9.99948 4.41882C12.9979 4.41882 15.4291 5.69242 15.4291 7.26227" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.3113 12.6311V22.5768C23.3113 24.1477 20.8801 25.4202 17.8817 25.4202C14.8833 25.4202 12.4531 24.1477 12.4531 22.5768V12.6311" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23.3113 12.6308C23.3113 14.2007 20.8801 15.4743 17.8817 15.4743C14.8833 15.4743 12.4531 14.2007 12.4531 12.6308C12.4531 11.0609 14.8833 9.78735 17.8817 9.78735C20.8801 9.78735 23.3113 11.0609 23.3113 12.6308Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const DiamondIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0769 24.3431L10.481 12.8772" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.1346 5.4989L13.6592 12.8773" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5779 23.7285L4.17635 14.3634C3.47481 13.5801 3.39425 12.4098 3.98278 11.5357L7.3752 6.49219C7.79477 5.86785 8.49184 5.49438 9.237 5.49438H18.6512C19.3964 5.49438 20.0945 5.86898 20.5141 6.49332L23.8976 11.5357C24.485 12.4109 24.4045 13.5801 23.7017 14.3622L15.2991 23.7285C14.5696 24.5423 13.3074 24.5423 12.5779 23.7285Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.6377 12.8726H24.2894" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const LogoutIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon', onClick }) => <svg onClick={onClick} className={className} width={width} height={height} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3252 24.2517C4.3252 21.7913 6.26674 18.7287 11.8599 18.7287C17.4531 18.7287 19.3947 21.7694 19.3947 24.2308" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6738 10.3988C16.6738 13.0566 14.5194 15.212 11.8605 15.212C9.20268 15.212 7.04834 13.0566 7.04834 10.3988C7.04834 7.74094 9.20268 5.58549 11.8605 5.58549C14.5194 5.58549 16.6738 7.74094 16.6738 10.3988Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.6177 14.9716H19.166M22.4182 12.7815L24.6165 14.9709L22.4182 17.1603" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ArrorHeadLeft = ({ width = '21', height = '21', color = "#FFFFFF", strokeWidth = '1', onClick }) => <svg onClick={onClick} width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3722 16.304L7.62256 10.4707L13.3722 4.63733" strokeWidth={strokeWidth} stroke={color} strokeLinecap="round" />
</svg>

export const ArrowHeadRight = ({ width = '21', height = '21', color = "#FFFFFF", strokeWidth = '1', className = '' }) => <svg className={className} width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.62256 4.63733L13.3722 10.4707L7.62256 16.304" strokeWidth={strokeWidth} stroke={color} strokeLinecap="round" />
</svg>

export const AmoreCoinIcon = ({ width = '24', height = '24', onClick, className = '' }) => <svg className={className} onClick={onClick} width={width} height={height} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3217 23.9381C17.5487 23.9381 22.5966 18.8901 22.5966 12.6632C22.5966 6.43629 17.5487 1.38837 11.3217 1.38837C5.0948 1.38837 0.046875 6.43629 0.046875 12.6632C0.046875 18.8901 5.0948 23.9381 11.3217 23.9381Z" fill="#E45A5A" />
    <path d="M11.3217 22.6116C17.5487 22.6116 22.5966 17.5637 22.5966 11.3368C22.5966 5.10984 17.5487 0.0619202 11.3217 0.0619202C5.0948 0.0619202 0.046875 5.10984 0.046875 11.3368C0.046875 17.5637 5.0948 22.6116 11.3217 22.6116Z" fill="#FFA5A6" />
    <path d="M11.3223 21.2852C16.4503 21.2852 20.6074 17.1281 20.6074 12C20.6074 6.87196 16.4503 2.71484 11.3223 2.71484C6.19422 2.71484 2.03711 6.87196 2.03711 12C2.03711 17.1281 6.19422 21.2852 11.3223 21.2852Z" fill="#FFD7D7" />
    <path d="M11.3223 20.6219C16.4503 20.6219 20.6074 16.4648 20.6074 11.3368C20.6074 6.20872 16.4503 2.05161 11.3223 2.05161C6.19422 2.05161 2.03711 6.20872 2.03711 11.3368C2.03711 16.4648 6.19422 20.6219 11.3223 20.6219Z" fill="#F87070" />
    <path d="M8.71721 6.79943C7.67404 7.07879 6.86387 7.86852 6.53027 8.94298C6.31317 9.64139 6.40848 10.5708 6.76856 11.3068C6.89565 11.5647 11.1901 15.9539 11.3172 15.9539C11.4019 15.9539 14.4572 12.854 15.3468 11.8655C15.8552 11.3014 16.0352 10.9737 16.157 10.3828C16.2523 9.92075 16.2523 9.63064 16.157 9.17399C16.0458 8.62602 15.7969 8.15325 15.4104 7.73421C14.8014 7.07879 14.1872 6.77794 13.3505 6.72959C12.7522 6.69736 12.3074 6.79406 11.7408 7.08953L11.3278 7.30443L10.883 7.07342C10.6394 6.94985 10.3111 6.81555 10.1575 6.77794C9.78155 6.69198 9.08258 6.70273 8.71721 6.79943ZM11.6084 9.39426C11.4495 10.4687 11.4072 10.4204 12.3974 10.4204H13.1122L13.2182 10.5923C13.2764 10.689 13.3241 10.8072 13.3241 10.8609C13.3241 10.9093 13.1758 11.1241 13.001 11.3444C12.3974 12.075 10.9677 13.6975 10.9306 13.6975C10.8724 13.6975 10.8724 13.676 11.0206 12.752C11.1795 11.7688 11.1742 11.7957 11.0683 11.6882C11.0047 11.6184 10.8512 11.6023 10.3005 11.6023C9.63858 11.6023 9.6068 11.5969 9.48501 11.468C9.33145 11.3175 9.32086 11.194 9.44265 11.0113C9.54326 10.8609 10.8247 9.31905 11.3595 8.7066C11.7884 8.21772 11.7884 8.22309 11.6084 9.39426Z" fill="#FFA5A6" />
</svg>

export const SearchIcon = ({ width = '22', height = '22', color = "#EBE9E1", strokeWidth = '.7', className, style }) => <svg className={className} style={style} width={width} height={height} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.96995 5.9248C4.89776 7.0163 3.15995 7.0163 2.08782 5.9248C1.01565 4.8333 1.01565 3.06436 2.08782 1.97289C3.15995 0.881432 4.89776 0.881432 5.96995 1.97289C7.04204 3.06436 7.04204 4.8333 5.96995 5.9248ZM5.96995 5.9248L7.45749 7.4392" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const HeartLineIcon = ({ width = '28', height = '28', color = "#FFFFFF", fill = "none", className = '', strokeWidth = 2 }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0832 11.495C25.0717 8.53653 23.5195 5.75426 20.4594 4.76845C18.3581 4.09036 16.0692 4.46745 14.2917 7.01951C12.5141 4.46745 10.2252 4.09036 8.12396 4.76845C5.0635 5.75437 3.51134 8.53717 3.5001 11.4961C3.4718 17.3803 9.4344 21.8832 14.2902 24.0354L14.2917 24.0347L14.2932 24.0354C19.1492 21.8831 25.1123 17.3799 25.0832 11.495Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" />
</svg>

export const StarLineIcon = ({ width = '28', height = '28', color = "#FFFFFF" }) => <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.2883 5.12669L17.4203 9.3859C17.6292 9.80403 18.0325 10.094 18.5002 10.1611L23.2696 10.8476C24.4479 11.0177 24.9168 12.4458 24.064 13.2641L20.6152 16.578C20.2763 16.9039 20.122 17.3724 20.2022 17.8324L21.0161 22.511C21.2165 23.6683 19.9847 24.5513 18.9315 24.0038L14.6687 21.7933C14.2509 21.5765 13.7504 21.5765 13.3313 21.7933L9.0685 24.0038C8.01527 24.5513 6.78346 23.6683 6.98512 22.511L7.79782 17.8324C7.878 17.3724 7.72372 16.9039 7.38479 16.578L3.93596 13.2641C3.08317 12.4458 3.55208 11.0177 4.73044 10.8476L9.49976 10.1611C9.96746 10.094 10.372 9.80403 10.5809 9.3859L12.7117 5.12669C13.2389 4.07357 14.7611 4.07357 15.2883 5.12669Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const CrossLineIcon = ({ width = '28', height = '28', color = "#000000" }) => <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7.25354L21 21.2535" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7.25354L7 21.2535" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const TickIcon = ({ width = '28', height = '28', color = "#18181C" }) => <svg width={width} height={height} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5146 14.0777L13.1708 16.7713L18.4808 11.384" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const GenderIcon = ({ width = '30', height = '30', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3633 25.4794V19.658M7.98055 23.2652H12.7189M6.0225 17.8877C3.6621 15.5273 3.6621 11.7001 6.0225 9.33971C8.38292 6.97929 12.2101 6.97929 14.5705 9.33971C16.9309 11.7001 16.9309 15.5273 14.5705 17.8877C12.2101 20.2493 8.38292 20.2493 6.0225 17.8877Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.2841 5.23239H25.8902M25.8902 5.23239V8.83851M25.8902 5.23239L21.8044 9.32041M11.4646 13.6138C11.4646 10.2755 14.1713 7.5689 17.5095 7.5689C20.8477 7.5689 23.5532 10.2755 23.5532 13.6138C23.5532 16.9521 20.8477 19.6575 17.5095 19.6575C14.1713 19.6575 11.4646 16.9521 11.4646 13.6138Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const BirthdayIcon = ({ width = '30', height = '30', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6819 23.8726H12.7837L14.7325 21.861L16.6819 23.8726Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.4747 27.215C13.0873 24.4899 15.6325 23.8728 15.6325 23.8728" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.667 12.9136C22.667 17.2975 19.1132 21.861 14.7294 21.861C10.3455 21.861 6.79175 17.2975 6.79175 12.9136C6.79175 8.52984 10.3455 4.97604 14.7294 4.97604C19.1132 4.97604 22.667 8.52984 22.667 12.9136Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.9734 12.8362C10.9734 10.9394 12.511 9.40176 14.4078 9.40176" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.7198 23.0114C22.6612 22.909 21.7201 23.6841 21.6177 24.7427" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.2395 18.6031C3.90441 19.3522 4.24005 20.2312 4.98919 20.5662L5.14342 20.6352C5.80738 20.9323 6.10487 21.7112 5.80787 22.3751L5.74297 22.5202C5.48182 23.1041 5.74341 23.7891 6.32723 24.0503" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.6899 6.30169C24.7007 6.29798 24.6983 6.29259 24.6846 6.28967" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.24771 5.00751C5.65929 5.95473 5.22505 7.05625 4.27783 7.46782" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const LocactionHomeIcon = ({ width = '30', height = '30', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36963 11.4796V21.9079C6.36963 23.9418 8.01878 25.591 10.0527 25.591H20.7266C22.7606 25.591 24.4098 23.9418 24.4098 21.9079V11.4796" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.2079 12.899L17.161 5.73742C16.1224 4.91634 14.6556 4.91634 13.617 5.73742L4.57007 12.899" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.2024 6.87311V9.70228" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5562 25.5909V21.1208C12.5562 20.1583 12.5562 19.6771 12.7351 19.3061C12.9123 18.9387 13.2087 18.6421 13.5761 18.4651C13.9473 18.2861 14.4285 18.2861 15.3909 18.2861C16.3533 18.2861 16.8345 18.2861 17.2056 18.4651C17.573 18.6421 17.8695 18.9387 18.0466 19.3061C18.2256 19.6771 18.2256 20.1583 18.2256 21.1208V25.5909" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const JobIcon = ({ width = '30', height = '30', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2988 20.6789V17.6292" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22.7458 7.03912C24.7773 7.03912 26.4122 8.68601 26.4122 10.7176V14.8528C23.455 16.5838 19.5482 17.6297 15.2927 17.6297C11.0373 17.6297 7.14248 16.5838 4.1853 14.8528V10.7055C4.1853 8.67398 5.83219 7.03912 7.86374 7.03912H22.7458Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.5063 7.03381V6.59384C19.5063 5.12728 18.3162 3.93719 16.8496 3.93719H13.7482C12.2816 3.93719 11.0916 5.12728 11.0916 6.59384V7.03381" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.2146 19.2438L4.4418 22.2599C4.59567 24.2926 6.28943 25.8638 8.327 25.8638H22.2702C24.3078 25.8638 26.0015 24.2926 26.1554 22.2599L26.3826 19.2438" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const SchollIcon = ({ width = '30', height = '30', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.17773 25.8336H25.8156" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5667 25.8381V21.6216C12.5667 21.1141 12.9843 20.6965 13.4918 20.6965H16.5025C17.0089 20.6965 17.4264 21.1141 17.4264 21.6216V25.8381" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.48193 25.8367V17.5804C5.48193 16.6224 6.25973 15.8552 7.20712 15.8552H8.5709" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.4133 15.8552H22.9245C23.8719 15.8552 24.6496 16.6224 24.6496 17.5804V25.8367" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.4165 25.8372V13.5878C21.4165 12.9831 21.0948 12.4229 20.5708 12.1188L15.8515 9.37485C15.3228 9.06841 14.6713 9.06841 14.1438 9.37485L9.42327 12.1188C8.89928 12.4229 8.57764 12.9831 8.57764 13.5878V25.8372" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.9968 9.14348V4.27554H18.5432V7.02063H14.9968" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.0133 15.2641H14.9365M14.9969 15.5758C14.8238 15.5758 14.6833 15.4354 14.6833 15.2623C14.6833 15.0891 14.8238 14.9489 14.9969 14.9489C15.17 14.9489 15.3102 15.0891 15.3102 15.2623C15.3102 15.4354 15.17 15.5758 14.9969 15.5758Z" stroke={color} strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const EyeIcon = ({ width = '18', height = '18', color = '#FFFFFF', className, style }) => <svg style={style} className={className} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.8228 13.8947C11.4472 13.8947 13.8477 12.035 15.1992 8.93636C13.8477 5.83766 11.4472 3.97803 8.8228 3.97803C6.20126 3.97803 3.80072 5.83766 2.44922 8.93636C3.80072 12.0365 6.20126 13.8947 8.82564 13.8947H8.8228Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.0049 8.94008C11.0049 10.1253 10.0288 11.0873 8.82604 11.0873C7.62258 11.0873 6.64648 10.1253 6.64648 8.94008C6.64648 7.75405 7.62258 6.79211 8.82604 6.79211C10.0288 6.79211 11.0049 7.75405 11.0049 8.94008Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const MasterCardIcon = ({ width = '44', height = '28' }) => <svg width={width} height={height} viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9531 3.59583H28.6822V24.3861H15.9531V3.59583Z" fill="#FF5F00" />
    <path d="M17.2647 13.9922C17.2631 11.9903 17.7169 10.0142 18.5918 8.21357C19.4667 6.41293 20.7397 4.83489 22.3144 3.59887C20.364 2.06602 18.0217 1.11284 15.5551 0.848252C13.0886 0.583665 10.5974 1.01835 8.36618 2.10263C6.135 3.18691 4.25388 4.87703 2.93781 6.97984C1.62174 9.08264 0.923828 11.5133 0.923828 13.994C0.923828 16.4747 1.62174 18.9053 2.93781 21.0081C4.25388 23.1109 6.135 24.8011 8.36618 25.8853C10.5974 26.9696 13.0886 27.4043 15.5551 27.1397C18.0217 26.8751 20.364 25.9219 22.3144 24.3891C20.7392 23.1527 19.4659 21.5741 18.591 19.7727C17.7161 17.9714 17.2626 15.9946 17.2647 13.9921V13.9922Z" fill="#EB001B" />
    <path d="M43.7071 13.9923C43.707 16.4732 43.0089 18.904 41.6926 21.0069C40.3763 23.1097 38.4949 24.7998 36.2634 25.8839C34.032 26.9681 31.5405 27.4025 29.0738 27.1375C26.6071 26.8725 24.2647 25.9189 22.3145 24.3855C23.8886 23.1484 25.1612 21.5699 26.0363 19.7692C26.9114 17.9685 27.3661 15.9925 27.3661 13.9904C27.3661 11.9883 26.9114 10.0124 26.0363 8.21162C25.1612 6.41089 23.8886 4.83242 22.3145 3.5953C24.2648 2.06196 26.6071 1.10831 29.0738 0.843333C31.5405 0.578361 34.032 1.01277 36.2635 2.0969C38.4949 3.18103 40.3763 4.87113 41.6926 6.97402C43.0089 9.07691 43.707 11.5077 43.7071 13.9886V13.9923Z" fill="#F79E1B" />
</svg>

export const WirelessIcon = ({ width = '25', height = '25', color = '#000000' }) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.09766 15.3493C10.8772 13.8286 13.5227 13.8286 15.312 15.3406" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.09766 11.5706C9.65679 8.71589 14.7435 8.71589 18.3026 11.5706" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.19922 7.90412C8.43479 3.64931 15.9637 3.64931 21.1992 7.90412" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const CreditCardChipIcon = ({ width = '28', height = '36' }) => <svg width={width} height={height} viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.9612 4.25739L27.9612 32.3293C27.9612 34.1266 26.4859 35.6019 24.6886 35.6019L3.89958 35.6019C2.10223 35.6019 0.626953 34.1266 0.626953 32.3293L0.626952 4.25739C0.626952 2.46004 2.10223 0.984764 3.89958 0.984764L24.6886 0.984763C26.4859 0.974376 27.9612 2.44965 27.9612 4.25739Z" fill="#F6C859" />
    <path d="M24.3146 22.2724C24.3146 22.4179 24.2315 22.5633 24.0964 22.6257C23.899 22.7295 23.6601 22.6464 23.5562 22.449C23.2549 21.8672 22.7042 21.0776 21.738 20.6205C20.5121 20.0387 19.1823 20.1946 19.068 20.4335C19.0368 20.4958 19.1615 20.7348 19.2342 20.8803C19.4316 21.2647 19.6913 21.7841 19.4836 22.3867C19.2758 22.9789 18.7459 23.2698 18.4966 23.4152C16.8343 24.3191 12.502 24.5996 10.3618 23.6438C9.6449 23.3217 9.22933 22.8958 9.09427 22.3555C8.96959 21.8049 9.19816 21.3582 9.38517 21.0049C9.54101 20.714 9.60334 20.5582 9.5514 20.4647C9.32283 20.0907 7.95144 20.1011 6.86057 20.6205C5.89436 21.0776 5.33334 21.8672 5.04244 22.449C4.93855 22.6464 4.69959 22.7192 4.5022 22.6257C4.3048 22.5218 4.23208 22.2828 4.32558 22.0854C4.67882 21.3997 5.34373 20.4543 6.51772 19.9037C7.67093 19.353 9.65529 19.0933 10.2371 20.0595C10.528 20.5478 10.289 21.0049 10.102 21.3789C9.94619 21.6594 9.82152 21.9192 9.87346 22.1789C9.95658 22.5321 10.3618 22.7711 10.6838 22.9166C12.5643 23.7581 16.6473 23.5191 18.1122 22.7192C18.3615 22.5841 18.6316 22.4179 18.7251 22.1374C18.8186 21.8672 18.7044 21.6179 18.5174 21.2543C18.3407 20.901 18.133 20.5062 18.3407 20.0907C18.7771 19.1972 20.7095 19.2491 22.0809 19.9037C23.2445 20.4543 23.9198 21.3997 24.273 22.0854C24.3042 22.1477 24.3146 22.2101 24.3146 22.2724Z" fill="#7D662D" />
    <path d="M11.0887 23.4776L11.0887 30.6982C11.0887 30.9163 10.9121 31.1033 10.6835 31.1033C10.4653 31.1033 10.2783 30.9267 10.2783 30.6982L10.2783 23.4776C10.2783 23.2594 10.4549 23.0724 10.6835 23.0724C10.9121 23.0724 11.0887 23.2594 11.0887 23.4776Z" fill="#7D662D" />
    <path d="M18.3094 23.4776L18.3094 30.6982C18.3094 30.9163 18.1328 31.1033 17.9042 31.1033C17.686 31.1033 17.499 30.9267 17.499 30.6982L17.499 23.4776C17.499 23.2594 17.6756 23.0724 17.9042 23.0724C18.1224 23.0724 18.3094 23.2594 18.3094 23.4776Z" fill="#7D662D" />
    <path d="M24.3144 13.8571C24.3144 13.9194 24.3041 13.9818 24.2729 14.0441C23.9196 14.7298 23.2547 15.6752 22.0807 16.2259C20.7094 16.8804 18.7769 16.9323 18.3406 16.0388C18.1432 15.6233 18.3406 15.2285 18.5172 14.8752C18.7042 14.5116 18.8185 14.2623 18.725 13.9922C18.6211 13.6909 18.299 13.5142 18.112 13.4104C16.6471 12.6104 12.5642 12.3714 10.6837 13.213C10.3616 13.3584 9.95644 13.6077 9.87332 13.9506C9.82138 14.1688 9.6032 14.3038 9.39542 14.2519C9.17724 14.1999 9.04218 13.9818 9.09413 13.774C9.2188 13.2337 9.64476 12.7974 10.3616 12.4857C12.5122 11.5299 16.8342 11.8 18.4964 12.7143C18.7458 12.8493 19.2756 13.1402 19.4834 13.7324C19.6912 14.335 19.4315 14.8649 19.2341 15.2389C19.1614 15.3843 19.0367 15.6337 19.0678 15.6856C19.1821 15.9246 20.512 16.0804 21.7379 15.4986C22.7041 15.0415 23.2651 14.2519 23.556 13.6701C23.6599 13.4727 23.8989 13.4 24.0963 13.4935C24.2417 13.5662 24.3144 13.7116 24.3144 13.8571Z" fill="#7D662D" />
    <path d="M9.48874 15.457C9.48874 15.6233 9.38485 15.7791 9.21862 15.8414C6.64208 16.7038 4.65772 14.6882 4.32526 14.0441C4.22137 13.8467 4.30448 13.6078 4.50188 13.5039C4.69928 13.4 4.93823 13.4831 5.04212 13.6805C5.18757 13.9714 6.77714 15.8207 8.96928 15.083C9.17706 15.0103 9.40563 15.1246 9.47835 15.3324C9.47835 15.3739 9.48874 15.4155 9.48874 15.457Z" fill="#7D662D" />
    <path d="M11.0887 5.43138L11.0887 12.6519C11.0887 12.8701 10.9121 13.0571 10.6835 13.0571C10.4653 13.0571 10.2783 12.8805 10.2783 12.6519L10.2783 5.43138C10.2783 5.21321 10.4549 5.0262 10.6835 5.0262C10.9121 5.03659 11.0887 5.21321 11.0887 5.43138Z" fill="#7D662D" />
    <path d="M18.3094 5.43138L18.3094 12.6519C18.3094 12.8701 18.1328 13.0571 17.9042 13.0571C17.686 13.0571 17.499 12.8805 17.499 12.6519L17.499 5.43138C17.499 5.21321 17.6756 5.0262 17.9042 5.0262C18.1224 5.03659 18.3094 5.21321 18.3094 5.43138Z" fill="#7D662D" />
</svg>

export const TrashIcon = ({ width = '28', height = '29', color = '#18181C', onClick }) => <svg onClick={onClick} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7305 11.9633C21.7305 21.3188 23.0579 25.5477 14.1301 25.5477C5.20112 25.5477 6.55584 21.3188 6.55584 11.9633" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.4283 8.37659H4.85645" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.0803 8.37662C18.0803 8.37662 18.6882 3.98328 14.141 3.98328C9.59502 3.98328 10.2028 8.37662 10.2028 8.37662" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const NotificationConfirmIcon = ({ width = '28', height = '29', color = '#18181C', onClick }) => <svg onClick={onClick} width={width} height={height} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.561 14.8168C24.561 9.01737 19.9278 4.31677 14.2116 4.31677C8.49545 4.31677 3.8623 9.01737 3.8623 14.8168C3.8623 20.615 8.49545 25.3168 14.2116 25.3168C19.9278 25.3168 24.561 20.615 24.561 14.8168Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.2266 14.8171L12.8827 17.5107L18.1927 12.1234" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const PremiumStartIcon = ({ width = '50', height = '50', color = '#FFFFFF', backgroundColor = '#DD88CF' }) => <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill={backgroundColor} />
    <g clipPath="url(#clip0_30_738)">
        <g clipPath="url(#clip1_30_738)">
            <path d="M21.5604 25.0002C21.4004 25.0009 21.2427 24.9631 21.1004 24.8902L16.0004 22.2202L10.9004 24.8902C10.7348 24.9773 10.548 25.0162 10.3614 25.0024C10.1748 24.9887 9.99585 24.9228 9.8448 24.8124C9.69375 24.702 9.57671 24.5514 9.50699 24.3778C9.43726 24.2041 9.41765 24.0144 9.45037 23.8302L10.4504 18.2002L6.33037 14.2002C6.20183 14.0719 6.11064 13.9111 6.0666 13.7349C6.02256 13.5587 6.02732 13.3739 6.08037 13.2002C6.13833 13.0225 6.24495 12.8646 6.38812 12.7444C6.5313 12.6242 6.7053 12.5465 6.89037 12.5202L12.5904 11.6902L15.1004 6.5602C15.1823 6.39113 15.3101 6.24855 15.4693 6.14878C15.6285 6.04901 15.8125 5.99609 16.0004 5.99609C16.1882 5.99609 16.3723 6.04901 16.5315 6.14878C16.6906 6.24855 16.8185 6.39113 16.9004 6.5602L19.4404 11.6802L25.1404 12.5102C25.3255 12.5365 25.4995 12.6142 25.6426 12.7344C25.7858 12.8546 25.8924 13.0125 25.9504 13.1902C26.0034 13.3639 26.0082 13.5487 25.9641 13.7249C25.9201 13.9011 25.8289 14.0619 25.7004 14.1902L21.5804 18.1902L22.5804 23.8202C22.6161 24.0077 22.5974 24.2015 22.5265 24.3787C22.4556 24.5559 22.3355 24.7091 22.1804 24.8202C21.9993 24.9471 21.7813 25.0104 21.5604 25.0002Z" fill={color} />
        </g>
    </g>
    <defs>
        <clipPath id="clip0_30_738">
            <rect width={width} height={height} fill="white" transform="translate(4 4)" />
        </clipPath>
        <clipPath id="clip1_30_738">
            <rect width={width} height={height} fill="white" transform="translate(4 4)" />
        </clipPath>
    </defs>
</svg>

export const WhatsAppIcon = ({ width = '50', height = '50', color = '#FFFFFF' }) =>
    <svg fill={color} height={width} width={height} version="1.1" id="Layer_1"
        viewBox="0 0 308 308" xmlSpace="preserve">
        <g id="XMLID_468_">
            <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
            <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
        </g>
    </svg>

export const InstragramIcon = ({ width = '50', height = '50', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill={color} />
    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill={color} />
</svg>

export const FacebookIcon = ({ width = '50', height = '50', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill={color} />
</svg>

export const CrossCloseIcon = ({ width = '25', height = '25', strokeWidth = "1.5", color = '#FFFFFF', onClick, className = '', style }) => <svg className={className} style={style} onClick={onClick} width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6.28882L18 18.2888" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6.28882L6 18.2888" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const LocationSettingIcon = ({ width = '25', height = '25', color = '#000000' }) => <svg width={width} height={height} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.9993 15.0254V12.3971C34.9993 8.81373 32.0943 5.9104 28.511 5.9104H26.416" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 15.0254V12.3971C5 8.81373 7.905 5.9104 11.4883 5.9104H13.6367" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 26.7957V29.4242C5 33.0075 7.905 35.9107 11.4883 35.9107H13.5833" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35.0004 26.7957V29.4242C35.0004 33.0075 32.0954 35.9107 28.5121 35.9107H26.3638" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M19.9697 28.8253C18.9113 28.8253 13.3496 24.3237 13.3496 19.6137C13.3496 15.957 16.3129 12.9937 19.9697 12.9937C23.6263 12.9937 26.5897 15.957 26.5897 19.6137C26.5897 24.3237 21.028 28.8253 19.9697 28.8253Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.973 19.1882V19.2681M20.2972 19.2053C20.2972 19.3855 20.1512 19.5315 19.971 19.5315C19.791 19.5315 19.645 19.3855 19.645 19.2053C19.645 19.0251 19.791 18.8792 19.971 18.8792C20.1512 18.8792 20.2972 19.0251 20.2972 19.2053Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const NotificationPermissionIcon = ({ width = '25', height = '25', color = '#000000' }) => <svg width={width} height={height} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.83842 17.3314C9.83842 11.7191 14.3886 7.16895 19.9992 7.16895C25.6115 7.16895 30.1617 11.7191 30.1617 17.3314L30.1633 19.3714C30.1633 20.5777 30.4292 21.7697 30.9433 22.8626L31.6648 24.3951C32.7675 26.7382 31.0568 29.4316 28.4687 29.4316H11.5313C8.94169 29.4316 7.23254 26.7382 8.33521 24.3951L9.05682 22.8626C9.57086 21.7697 9.83679 20.5777 9.83679 19.3714L9.83842 17.3314Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 5.02539V7.16912" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.39258 10.8275C8.14984 9.17836 9.35631 7.63299 10.9195 6.41357" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32.6054 10.8275C31.8483 9.17836 30.6418 7.63299 29.0786 6.41357" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.2017 30.229C15.2017 32.877 17.3487 35.0255 19.9983 35.0255C22.6463 35.0255 24.7933 32.877 24.7933 30.229" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const LanguageIcon = ({ width = '25', height = '25', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7306 19.0413C13.1697 19.2846 8.15037 14.8636 7.25528 11.0779" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.57071 6.17169H17.0778" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.97501 4.492V6.17419" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0473 21.2755L16.8088 11.949L21.5703 21.2755" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.9161 6.17169C14.0299 6.41005 13.45 14.8142 4.15469 17.6581" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const SendMessageIcon = ({ width = '22', height = '22', color = '#E64997', strokeWidth = '1', style, className = '', onClick}) => <svg onClick={onClick} width={width} height={height} className={className} style={style} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.97643 4.57899L15.5343 1.39302C19.8236 -0.036719 22.1539 2.30491 20.7354 6.59413L17.5495 16.152C15.4105 22.5802 11.8981 22.5802 9.75907 16.152L8.8134 13.315L5.97643 12.3694C-0.451779 10.2304 -0.451779 6.72923 5.97643 4.57899Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.02734 12.8307L13.0576 8.78917" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const PlayIcon = ({ width = '35', height = '35', color = "#FFFFFF", style, className = '', onClick }) => <svg onClick={onClick} width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M25.6495 21.8016C22.6155 24.5495 18.8242 27.0216 14.652 28.7028C11.1014 30.1023 8.12724 28.3569 7.69091 24.8575C7.15971 19.6987 7.17138 14.7604 7.69091 10.1504C8.16665 6.51371 11.4428 4.96974 14.652 6.32108C18.76 8.00368 22.4448 10.2875 25.6495 13.2222C28.3872 15.7016 28.4514 19.2259 25.6495 21.8016Z" fill={color} />
</svg>

export const PauseIcon = ({ width = '35', height = '35', color = "#FFFFFF", style, className = '', onClick }) => <svg onClick={onClick} width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.58963 3.5H6.27563C5.44863 3.5 4.77563 4.173 4.77563 5V19C4.77563 19.827 5.44863 20.5 6.27563 20.5H8.58963C9.41664 20.5 10.0896 19.827 10.0896 19V5C10.0896 4.173 9.41664 3.5 8.58963 3.5Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M17.7243 3.5H15.4103C14.5833 3.5 13.9103 4.173 13.9103 5V19C13.9103 19.827 14.5833 20.5 15.4103 20.5H17.7243C18.5513 20.5 19.2243 19.827 19.2243 19V5C19.2243 4.173 18.5513 3.5 17.7243 3.5Z" fill={color} />
</svg>

export const MicrophoneIcon = ({ width = '24', height = '24', color = "#FFFFFF", style, className = '', onClick }) => <svg style={style} className={className} onClick={onClick} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99609 17.5002V15.1269" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.0016 9.09341C16.0097 12.4177 13.3204 15.1191 9.99609 15.1272C6.67096 15.1191 3.98214 12.4177 3.99025 9.09341" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.99576 12.1308C8.30766 12.1276 6.94225 10.7557 6.9463 9.06842V5.54946C6.9463 3.86541 8.31171 2.5 9.99576 2.5C11.6798 2.5 13.0453 3.86541 13.0453 5.54946V9.06842C13.0493 10.7557 11.6847 12.1268 9.99742 12.1308H9.99576Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const SendImageIcon = ({ width = '21', height = '21', color = "#4B164C", style, className = '', onClick }) => <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4984 9.12742V13.3125C17.4984 15.7661 15.9629 17.4968 13.5094 17.4968H6.48095C4.02739 17.4968 2.5 15.7661 2.5 13.3125V6.69004C2.5 4.23567 4.0355 2.50652 6.48095 2.50652H10.8443" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.3584 2.56184V6.62463" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.391 4.5946H13.3281" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.99774 7.46664C8.99774 8.29476 8.32601 8.9665 7.49789 8.9665C6.66977 8.9665 5.99805 8.29476 5.99805 7.46664C5.99805 6.63852 6.66977 5.9668 7.49789 5.9668C8.32601 5.96598 8.99691 6.63691 8.99774 7.46502V7.46664Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.34668 16.0583C3.98033 14.9369 4.77685 13.9135 5.703 13.0278C6.91357 12.028 8.28621 13.5886 9.78933 13.5886C11.3013 13.5886 12.2032 10.1432 13.7711 10.1432C15.3147 10.1432 16.7448 11.6625 17.5 12.4428" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const SendGiftIcon = ({ width = '21', height = '21', color = "#4B164C", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.99642 5.95162H6.99401C6.07293 5.95162 5.32617 5.17892 5.32617 4.22622C5.32617 3.2727 6.07293 2.5 6.99401 2.5C9.32917 2.5 9.99642 5.95162 9.99642 5.95162Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.99707 5.95162H12.9993C13.9204 5.95162 14.6672 5.17892 14.6672 4.22622C14.6672 3.2727 13.9204 2.5 12.9993 2.5C10.6642 2.5 9.99707 5.95162 9.99707 5.95162Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.93574 5.95378H14.0568C15.8503 5.95378 16.9684 7.28919 16.9684 9.17592V14.2768C16.9684 16.1635 15.8431 17.4989 14.0568 17.4989H5.93574C4.14223 17.4989 3.03223 16.1635 3.03223 14.2768V9.17592C3.03223 7.28919 4.14223 5.95378 5.93574 5.95378Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99707 17.5004V10.9863" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.28061 9.92842H3.03223M16.9683 9.92842H11.7199" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99517 10.9855L8.2793 11.5524L8.27957 9.92942L8.2793 5.97M10.0031 10.9857L11.7188 11.5443L11.7189 9.92942L11.7107 5.95378" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const AmoreHeartIcon = ({ width = '21', height = '21', color = "#FFFFFF", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66691 0.17428C1.53724 0.476809 0.659885 1.33203 0.29862 2.4956C0.0635105 3.25192 0.166729 4.25841 0.556666 5.05545C0.694291 5.33471 5.34486 10.0879 5.48249 10.0879C5.57424 10.0879 8.88297 6.73099 9.84634 5.66051C10.3968 5.04964 10.5918 4.69475 10.7237 4.05478C10.8269 3.55445 10.8269 3.24029 10.7237 2.74577C10.6033 2.15235 10.3338 1.64038 9.91516 1.18659C9.2557 0.476809 8.59052 0.151009 7.68449 0.0986481C7.0365 0.0637417 6.55482 0.168463 5.94124 0.488444L5.49396 0.721158L5.01227 0.47099C4.74849 0.33718 4.39296 0.191734 4.22666 0.151009C3.81952 0.0579233 3.06259 0.0695591 2.66691 0.17428ZM5.79788 2.9843C5.62585 4.14787 5.57997 4.09551 6.6523 4.09551H7.42644L7.54113 4.28168C7.60421 4.3864 7.65582 4.51439 7.65582 4.57257C7.65582 4.62493 7.49525 4.85765 7.30602 5.09618C6.6523 5.88741 5.10402 7.6444 5.06388 7.6444C5.0008 7.6444 5.0008 7.62112 5.16136 6.62045C5.3334 5.55579 5.32766 5.58488 5.21297 5.46852C5.14416 5.39289 4.97786 5.37543 4.38149 5.37543C3.66469 5.37543 3.63029 5.36962 3.4984 5.22999C3.3321 5.06709 3.32063 4.93328 3.45252 4.73547C3.56148 4.57257 4.94919 2.90285 5.52836 2.23962C5.99285 1.71019 5.99285 1.71601 5.79788 2.9843Z" fill={color} />
</svg>

export const AmoreImageLock = ({ size, color = "#FFFFFF", style, className = '', onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 590.74 703.18"
        width={size}
        style={style}
    >
        <path
            fill={color}
            d="M744.22,410.39l-67.88.43V370.31c0-69-45-110.71-114-110.71S447.39,301.29,447.39,370.31v40.51l-66.94-.43V369.88C380.45,269.59,462,188,562.33,188s181.89,81.59,181.89,181.88Z"
            transform="translate(-267.17 -188)"
        />
        <path
            fill={color}
            d="M587.38,655.48l6.68,78.79a10.09,10.09,0,0,1-10,11h-43a10.09,10.09,0,0,1-10-11l6.68-78.79a59.69,59.69,0,1,1,49.69,0ZM806.79,429.77C766.4,391.4,702.9,378.24,650.06,397.29c-39.57,14.26-71.69,46-87.52,84.12-15.84-38.08-48-69.86-87.53-84.12-52.85-19.05-116.34-5.89-156.73,32.48C278.15,467.89,259.6,527,270,580.77c29.6,152.54,194.4,267.62,292.51,310.41,98.1-42.79,262.89-157.87,292.5-310.41C865.48,527,846.91,467.89,806.79,429.77Z"
            transform="translate(-267.17 -188)"
        />
    </svg>
);

export const AmoreImageLockOpen = ({ size = '21', color = "#FFFFFF", style, className = '', onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 711.41 898.88"
        width={size}
        style={style}
    >
        <path
            fill={color}
            d="M705.21,246.57,629.7,277.89l-18.4-45.18c-31.35-77-100.46-103-177.44-71.7S324.61,259.72,356,336.7l18.4,45.18-74.87,29.93-18.4-45.18c-45.55-111.86,8.39-239.92,120.24-285.48S641.26,89.54,686.81,201.4Z"
            transform="translate(-156.19 -64.97)"
        />
        <path
            fill={color}
            d="M541.81,680l8.05,94.89a12.16,12.16,0,0,1-12.11,13.19H486a12.16,12.16,0,0,1-12.11-13.19L482,680a71.88,71.88,0,1,1,59.83,0ZM806,408.18c-48.64-46.2-125.1-62.05-188.75-39.11-47.65,17.17-86.32,55.44-105.4,101.3-19.07-45.86-57.75-84.13-105.4-101.3-63.64-22.94-140.1-7.09-188.75,39.11C169.42,454.09,147.07,525.33,159.63,590c35.66,183.7,234.12,322.29,352.26,373.82C630,912.32,828.49,773.73,864.15,590,876.71,525.33,854.36,454.09,806,408.18Z"
            transform="translate(-156.19 -64.97)"
        />
    </svg>
);

export const ImageViewedIcon = ({ width = '22', height = '22', color = "#FFFFFF", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.30035 6.55029C5.93371 6.96589 5.60834 7.4026 5.3252 7.87002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.23117 16.8414C4.93363 16.3241 4.67544 15.7636 4.48828 15.1733" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.8809 21.0322L10.8905 21.0312C11.5249 21.1839 12.1853 21.2577 12.8523 21.2558" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.132 4.05713C9.55037 4.24333 8.98889 4.49192 8.46484 4.80001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.8828 3.6226C13.5499 3.62068 14.2093 3.69458 14.8447 3.84719C15.7603 4.05067 16.6347 4.40962 17.4256 4.89528C17.9016 5.17746 18.3479 5.50188 18.7539 5.86949C19.4431 6.48376 20.0362 7.20744 20.5046 8.02519C20.8127 8.5502 21.0613 9.11168 21.2494 9.70196C21.3934 10.1406 21.5028 10.5927 21.5767 11.0601C21.6506 11.5275 21.6861 11.9921 21.6842 12.4528C21.6881 13.1285 21.6103 13.7696 21.4577 14.405L21.4587 14.4146C21.2561 15.3293 20.8953 16.1951 20.4096 16.9859C20.137 17.461 19.804 17.9083 19.4364 18.3143C18.8211 19.0034 18.0907 19.6071 17.272 20.0755C16.746 20.375 16.1855 20.6322 15.6039 20.8184" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.30902 19.971C7.84256 19.6965 7.39721 19.373 6.99121 19.0054" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.27651 10.4546C4.12294 11.09 4.04904 11.7494 4.05288 12.4261" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.7183 21.3768L15.6221 20.799L16.2133 18.7163" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const SettingsIcon = ({ width = '24', height = '24', color = "#FFFFFF", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0725 10.25C13.4336 10.25 14.5367 11.3691 14.5367 12.75C14.5367 14.1309 13.4336 15.25 12.0725 15.25C10.7114 15.25 9.6084 14.1309 9.6084 12.75C9.6084 11.3691 10.7114 10.25 12.0725 10.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M20.1232 8.00025C19.4495 6.80799 17.9579 6.40004 16.7922 7.08852C15.7782 7.68613 14.511 6.93838 14.511 5.74218C14.511 4.36619 13.4187 3.25 12.0722 3.25C10.7257 3.25 9.63334 4.36619 9.63334 5.74218C9.63334 6.93838 8.3661 7.68613 7.35306 7.08852C6.18635 6.40004 4.69484 6.80799 4.02111 8.00025C3.34833 9.1925 3.74755 10.7167 4.91427 11.4041C5.92729 12.0027 5.92729 13.4973 4.91427 14.0959C3.74755 14.7843 3.34833 16.3085 4.02111 17.4998C4.69484 18.692 6.18635 19.1 7.3521 18.4125C8.36513 17.8139 9.63334 18.5616 9.63334 19.7578C9.63334 21.1338 10.7257 22.25 12.0722 22.25C13.4187 22.25 14.511 21.1338 14.511 19.7578C14.511 18.5616 15.7782 17.8139 16.7922 18.4125C17.9579 19.1 19.4495 18.692 20.1232 17.4998C20.7969 16.3085 20.3967 14.7843 19.231 14.0959C18.218 13.4973 18.217 12.0027 19.231 11.4041C20.3967 10.7167 20.7969 9.1925 20.1232 8.00025Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const BlockedUserIcon = ({ width = '24', height = '24', color = "#FFFFFF", strokeWidth = '1.5', style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.94971 5.82412C7.55117 4.19934 9.77597 3.1875 12.2213 3.1875C17.1216 3.1875 21.0917 7.2154 21.0917 12.187C21.0917 14.668 20.0944 16.9252 18.4929 18.55" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.0658 20.3027C14.9053 20.867 13.5916 21.188 12.2202 21.188C10.3311 21.188 8.58579 20.5848 7.14735 19.5633C4.84584 17.9385 3.34985 15.2435 3.34985 12.1885C3.34985 10.7972 3.66632 9.46431 4.22251 8.28707V8.27734" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.3321 20.4189L4.10645 3.95703" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5349 13.5194C14.6569 12.994 15.4432 11.846 15.4432 10.5131C15.4432 8.69369 13.9857 7.21484 12.1924 7.21484C10.8786 7.21484 9.74702 8.01264 9.23877 9.16069" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.14795 19.5617C7.34933 17.9758 8.73983 16.2148 12.1921 16.2148" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const SupportIcon = ({ width = '24', height = '24', color = "#FFFFFF", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3389 20.9021L9.93781 19.4757C9.53887 19.0696 8.99798 18.8421 8.43408 18.8421H7.38109C5.23674 18.8421 3.49805 17.0722 3.49805 14.8892V7.94996C3.49805 5.76704 5.23674 3.99805 7.38109 3.99805H17.3577C19.5021 3.99805 21.2398 5.76704 21.2398 7.94996V14.8892C21.2398 17.0722 19.5021 18.8421 17.3577 18.8421H16.3047C15.7408 18.8421 15.1999 19.0696 14.8009 19.4757L13.3989 20.9021C12.8302 21.482 11.9086 21.482 11.3389 20.9021Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.9692 12.9248C12.897 14.0163 11.1592 14.0163 10.0871 12.9248C9.01492 11.8333 9.01492 10.0644 10.0871 8.97289C11.1592 7.88143 12.897 7.88143 13.9692 8.97289C15.0413 10.0644 15.0413 11.8333 13.9692 12.9248ZM13.9692 12.9248L15.4568 14.4392" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const StarIcon = ({ width = '24', height = '24', color = "#FFFFFF", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.1614 4.23951L14.9626 7.89026C15.1391 8.24866 15.4799 8.49717 15.875 8.55468L19.9043 9.14312C20.8999 9.28894 21.296 10.513 20.5756 11.2144L17.6618 14.0549C17.3755 14.3343 17.2451 14.7358 17.3129 15.1301L18.0005 19.1403C18.1699 20.1323 17.1292 20.8892 16.2394 20.4199L12.638 18.5252C12.2849 18.3393 11.8621 18.3393 11.508 18.5252L7.90667 20.4199C7.01685 20.8892 5.97616 20.1323 6.14653 19.1403L6.83314 15.1301C6.90087 14.7358 6.77053 14.3343 6.48419 14.0549L3.57047 11.2144C2.84999 10.513 3.24615 9.28894 4.24168 9.14312L8.27101 8.55468C8.66614 8.49717 9.00791 8.24866 9.18443 7.89026L10.9846 4.23951C11.43 3.33683 12.716 3.33683 13.1614 4.23951Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const PenIcon = ({ width = '20', height = '20', color = "#B0B0B0", style, className = '', onClick }) => <svg style={style} width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3701 7.21924L17.8662 11.258" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.07852 20.1672L10.7451 19.6824C11.6408 19.4214 12.4212 18.8638 12.9571 18.1014L19.3459 9.24227C20.1107 8.19295 19.88 6.72353 18.8307 5.95869L17.0972 4.69491C16.048 3.93137 14.5773 4.16229 13.8136 5.21015L7.3547 14.1685C6.8618 14.8705 6.60136 15.7088 6.60854 16.567L6.62456 18.3428C6.63666 19.6136 7.85855 20.5218 9.07852 20.1672Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const VibrationIcon = ({ width = '22', height = '22', color = '#18181C', style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.2075 17.7567L17.1744 7.54057C17.1688 5.74334 15.785 4.29057 14.0844 4.2964L9.73583 4.31197C8.03522 4.31781 6.66057 5.78031 6.66701 7.57852L6.70016 17.7946C6.70569 19.5919 8.08954 21.0437 9.79015 21.0378L14.1379 21.0223C15.8394 21.0164 17.2131 19.5539 17.2075 17.7567Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.68889 8.41357L4.43468 9.56859L3.4274 11.1138L4.42915 12.6668L3.42188 14.2179L4.42362 15.7738L3.71375 16.8626" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1862 8.41357L19.4404 9.56859L20.4477 11.1138L19.4459 12.6668L20.4532 14.2179L19.4515 15.7738L20.1614 16.8626" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9521 17.5996V17.5514M11.9522 17.2983C11.8213 17.2983 11.7153 17.4103 11.7153 17.548C11.7153 17.6863 11.8213 17.7983 11.9522 17.7983C12.0829 17.7983 12.1889 17.6863 12.1889 17.548C12.1889 17.4103 12.0829 17.2983 11.9522 17.2983Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const PrivacyPolicyIcon = ({ width = '22', height = '22', color = '#18181C', style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5823 3.93607C14.132 3.93607 14.6586 4.16284 15.0395 4.56578L18.777 8.51538C19.1377 8.89691 19.3392 9.40594 19.3392 9.9354V18.0993C19.3536 20.1559 17.7592 21.8523 15.7349 21.936L7.9232 21.935C5.87985 21.8893 4.26051 20.1724 4.30561 18.0993V7.5927C4.35357 5.55367 6.00073 3.92731 8.01147 3.93607H13.5823Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.8242 16.9968V16.9868" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.8184 10.9673V14.1189" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0576 3.99854V6.89115C14.0566 8.30241 15.1828 9.44895 16.5749 9.45187H19.2744" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const TermsOfServiceIcon = ({ width = '22', height = '22', color = '#18181C', style, className = '', onClick }) => <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5517 18.0598H13.8242C14.7324 18.0598 15.466 17.3973 15.466 16.4759C15.466 15.7092 14.9558 15.0973 14.2232 14.9104C13.175 14.6439 12.1298 14.4347 11.0365 14.4619C9.30363 14.5038 8.09149 15.4845 6.71729 16.4165" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5526 18.0886C13.1961 17.9932 13.8511 18.0896 14.5012 18.074C16.0078 18.038 17.1893 16.745 18.3362 15.8693C18.9221 15.4208 19.743 15.4802 20.2609 16.0085C20.8362 16.5942 20.8362 17.5437 20.2609 18.1295C19.0228 19.3923 17.9277 20.5628 16.2485 21.2253C13.9182 22.1447 11.7557 21.6982 9.39569 21.2253C8.48275 21.0414 7.64174 21.0307 6.71729 21.0307" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.58203 21.935H5.53621C6.26503 21.935 6.71767 21.4135 6.71767 20.675V16.3523C6.71767 15.6138 6.26503 15.0923 5.53621 15.0923H4.58203" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.7606 11.8946V9.62285C19.7606 9.12082 19.5698 8.63921 19.2274 8.27728L15.6849 4.53344C15.3234 4.15205 14.8247 3.93606 14.303 3.93606H9.02392C7.1175 3.92828 5.55628 5.4694 5.51025 7.40262V11.8946" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.7563 3.99463V6.73636C14.7563 8.07511 15.8237 9.1609 17.1422 9.16382H19.7018" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const AppVersionIcon = ({ width = '22', height = '22', color = "#18181C", style, className = '', onClic }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1049 3.66748H9.10466C7.13484 3.66748 5.53809 5.28748 5.53809 7.28597L5.53905 18.05C5.53905 20.0475 7.13581 21.6675 9.10561 21.6675H14.5413C16.5111 21.6675 18.1079 20.0475 18.1069 18.049V12.685" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.4358 8.06885H12.6616V9.74333" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.1091 3.66748V5.46748H16.335" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.7236 5.32418C13.2204 4.44169 14.1515 3.85693 15.2247 3.85693C17.1494 3.85693 18.1075 5.47693 18.1075 5.47693" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.7184 8.24012C17.2208 9.11288 16.2895 9.69764 15.225 9.69764C13.6369 9.69764 12.6616 8.07764 12.6616 8.07764" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.2173 17.9981V17.9499M12.2173 17.6968C12.0811 17.6968 11.9707 17.8088 11.9707 17.9466C11.9707 18.0848 12.0811 18.1968 12.2173 18.1968C12.3536 18.1968 12.464 18.0848 12.464 17.9466C12.464 17.8088 12.3536 17.6968 12.2173 17.6968Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const DeleteAccountIcon = ({ width = '25', height = '25', color = "#18181C", style, className = '', onClick }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9513 15.626C8.62434 15.626 5.78662 16.1363 5.78662 18.179C5.78662 20.2217 8.60814 20.7501 11.9513 20.7501" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5134 16.1047L15.1403 19.5268M18.5483 19.5618L15.1079 16.0713" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.8878 8.74651C15.8878 10.9527 14.125 12.7421 11.9495 12.7421C9.77502 12.7421 8.01221 10.9527 8.01221 8.74651C8.01221 6.54032 9.77502 4.75098 11.9495 4.75098C14.125 4.75098 15.8878 6.54032 15.8878 8.74651Z" stroke="#D10B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const UploadImageIcon = ({width = '25', height = '25', color = "#18181C", style, className = '', onClick}) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0894 3.0625V9.1545" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.7158 5.48081L18.0889 3.0625L20.4629 5.48081" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.77832 15.6427L7.67076 12.7758C9.11243 11.7131 11.0826 11.8104 12.4178 13.0006L20.0013 19.9033" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5144 15.5445C20.6875 14.7738 19.4002 13.5457 17.6507 14.5013C16.7472 14.9976 15.9501 15.5153 15.5078 15.817" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5138 11.0201V16.0426C21.5138 18.9874 19.6971 21.0641 16.7955 21.0641H8.48213C5.57959 21.0641 3.77246 18.9874 3.77246 16.0426V8.09574C3.77246 5.15095 5.58918 3.07422 8.48213 3.07422H11.9899" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


export const HeadphoneIcon = ({width = '25', height = '25', color = "#18181C", style, className = '', onClick}) => <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.80786 18.2547C6.3031 19.1129 7.40062 19.4077 8.25878 18.9115C9.115 18.4162 9.40884 17.3207 8.91456 16.4625L7.40743 13.852C6.91316 12.9948 5.81662 12.701 4.95943 13.1943L4.74829 13.3159C4.21024 13.6263 3.9378 14.2655 4.1217 14.859C4.44959 15.9167 5.00905 17.055 5.80786 18.2547Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.8203 18.2547C18.325 19.1129 17.2275 19.4077 16.3694 18.9115C15.5131 18.4162 15.2193 17.3207 15.7136 16.4625L17.2207 13.852C17.715 12.9948 18.8115 12.701 19.6687 13.1943L19.8799 13.3159C20.4179 13.6263 20.6903 14.2655 20.5064 14.859C20.1786 15.9167 19.6191 17.055 18.8203 18.2547Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6748 21.7551C13.971 21.7551 15.5988 22.226 17.2441 19.1504" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.1446 15.818C20.6155 14.7584 20.8801 13.5811 20.8801 12.3454C20.8801 7.61477 17.0398 3.78125 12.3092 3.78125C7.58545 3.78125 3.74512 7.61477 3.74512 12.3454C3.74512 13.4196 3.94361 14.449 4.30458 15.3918" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


export const SearchImageIcon = ({width = '24', height = '24', color = "#18181C", strokeWidth = '1.5', style, className = '', onClick}) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9956 15.7561L17.0464 12.8891C15.5837 11.8264 13.5848 11.9237 12.2301 13.1139L4.53613 20.0167" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15.6578C3.83888 14.8871 5.1449 13.6589 6.91998 14.6146C7.83672 15.1109 8.64544 15.6287 9.09407 15.9303" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13.0867V16.1591C3 19.1039 4.84321 21.1807 7.78806 21.1807H16.2217C19.1665 21.1807 21 19.1039 21 16.1591V8.21207C21 5.26721 19.1568 3.19141 16.2217 3.19141H12.8982" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.06261 3.19141C7.754 3.19141 9.12522 4.56263 9.12522 6.25402C9.12522 7.94541 7.754 9.31663 6.06261 9.31663C4.37122 9.31663 3 7.94541 3 6.25402C3 4.56263 4.37122 3.19141 6.06261 3.19141Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.14746 8.49609L9.68898 10.0347" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

