


//Arror Left Icon
export const ArrowLeftIcon = () =>
    <svg width="16" height="14" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.52358 7.56824L16.3083 7.56824" stroke="#18181C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.48657 13.5926L1.52338 7.56858L7.48657 1.54358" stroke="#18181C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

//User Icon
export const UserIcon = ({ width, height, className = 'layout-header-icon', color = "#18181C", }) => <svg className={className} width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6745 22.0815C8.03572 22.0815 4.92822 21.507 4.92822 19.2063C4.92822 16.9055 8.016 14.7815 11.6745 14.7815C15.3134 14.7815 18.4209 16.8849 18.4209 19.1857C18.4209 21.4855 15.3332 22.0815 11.6745 22.0815Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6673 11.5933C14.0554 11.5933 15.9908 9.62958 15.9908 7.20686C15.9908 4.78413 14.0554 2.81958 11.6673 2.81958C9.2794 2.81958 7.34304 4.78413 7.34304 7.20686C7.33498 9.6214 9.257 11.5851 11.6369 11.5933C11.6476 11.5933 11.6575 11.5933 11.6673 11.5933Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Male Gender Icon
export const MaleGenderIcon = ({ width, height, className, color }) => <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.51611 11.7421C6.51611 7.92552 9.56593 4.83044 13.3286 4.83044C17.0912 4.83044 20.1411 7.92552 20.1411 11.7421C20.1411 15.5596 17.0912 18.6538 13.3286 18.6538C9.56593 18.6538 6.51611 15.5596 6.51611 11.7421Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.37061 20.709L8.45363 16.5674M4.47125 17.6711L7.36303 20.6058" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Female Gender Icon
export const FemaleGenderIcon = ({ width, height, className, color }) =>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.3777 14.3047C17.3777 17.9491 14.4658 20.9033 10.8737 20.9033C7.28247 20.9033 4.37061 17.9491 4.37061 14.3047C4.37061 10.6612 7.28247 7.70691 10.8737 7.70691C14.4658 7.70691 17.3777 10.6612 17.3777 14.3047Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.1414 5.02073L15.5308 9.69858M20.1297 9.19875L20.1383 5.01904L16.0186 5.02769" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

//Image Icon
export const ImageAddIcon = ({ width = '25', height = '25', className = 'image-add-icon', color }) => <svg className={className} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4473 27.9773H41.5527" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 14.2273V41.7273" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Color not used with this commonent
export const ArrowDownIcon = ({ width = '17', height = '17', className = 'arrow-down-icon', color = '#18181C' }) => <svg width={width} height={height} className={className} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2277 6.4364L8.62803 11.1031L4.02832 6.4364" strokeLinecap="round" strokeLinejoin="round" />
</svg>

//Location Icon
export const LocationIcon = ({ width = '17', height = '17', className = 'arrow-down-icon', color = '#18181C' }) => <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.2925 11.4617C14.2925 10.0804 13.1893 8.96118 11.8289 8.96118C10.4674 8.96118 9.36426 10.0804 9.36426 11.4617C9.36426 12.8419 10.4674 13.9612 11.8289 13.9612C13.1893 13.9612 14.2925 12.8419 14.2925 11.4617Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.8275 21.9612C10.6462 21.9612 4.43555 16.8596 4.43555 11.5245C4.43555 7.34782 7.74448 3.96118 11.8275 3.96118C15.9104 3.96118 19.2203 7.34782 19.2203 11.5245C19.2203 16.8596 13.0087 21.9612 11.8275 21.9612Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <path d="M1 11.3474C1 5.63269 5.63269 1 11.3474 1C17.0621 1 21.6948 5.63269 21.6948 11.3474C21.6948 17.0621 17.0621 21.6948 11.3474 21.6948C5.63269 21.6948 1 17.0621 1 11.3474Z" stroke="white" stroke-width="2" />
    <path d="M7.69629 7.59741L15.0887 15.0974" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.0887 7.59741L7.69629 15.0974" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>


export const HomeIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.31201 11.1567V21.2776C5.31201 23.2516 6.88958 24.8521 8.83526 24.8521H19.0458C20.9915 24.8521 22.5691 23.2516 22.5691 21.2776V11.1567" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.289 12.5343L15.6348 5.58386C14.6412 4.78699 13.2381 4.78699 12.2446 5.58386L3.59033 12.5343" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.4575 6.68604V9.43181" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.23 24.8521V20.5137C11.23 19.5797 11.23 19.1126 11.4012 18.7525C11.5706 18.396 11.8542 18.1081 12.2056 17.9363C12.5607 17.7626 13.021 17.7626 13.9417 17.7626C14.8623 17.7626 15.3226 17.7626 15.6776 17.9363C16.029 18.1081 16.3127 18.396 16.4821 18.7525C16.6533 19.1126 16.6533 19.5797 16.6533 20.5137V24.8521" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const NotificationIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9351 3.85205C8.83601 3.85205 6.6205 8.5365 6.6205 11.6332C6.6205 13.9476 6.95124 13.2665 5.6885 16.0898C4.14651 20.1132 10.3474 21.7576 13.9351 21.7576C17.5218 21.7576 23.7227 20.1132 22.1818 16.0898C20.919 13.2665 21.2498 13.9476 21.2498 11.6332C21.2498 8.5365 19.0332 3.85205 13.9351 3.85205Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5915 24.8497C15.1031 26.5364 12.7814 26.5564 11.2788 24.8497" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const DiscoverIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.65039 18.363L11.4819 12.4255L17.3341 10.5674L15.5027 16.5048L9.65039 18.363Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.4924 25.6779C19.5962 25.6779 24.5443 20.6578 24.5443 14.4651C24.5443 8.27247 19.5962 3.25232 13.4924 3.25232C7.38855 3.25232 2.44043 8.27247 2.44043 14.4651C2.44043 20.6578 7.38855 25.6779 13.4924 25.6779Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


export const DoubleHeartIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.3306 16.1227C20.3283 13.1895 18.3837 10.4561 15.3539 10.455C14.5696 10.4561 13.7986 10.6491 13.1039 11.0146C12.4079 11.3812 11.8764 12.1225 11.4233 12.7718C10.6815 12.5175 9.82338 12.2315 9.04914 12.345C8.27488 12.4585 7.53867 12.7559 6.89869 13.2134C4.43945 15.0148 4.41931 18.3794 6.10319 20.7643C8.73697 24.5591 15.4311 25.4184 15.4311 25.4184C15.4311 25.4184 20.306 20.8392 20.3306 16.1227Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9402 12.0686C11.6403 11.241 11.4479 10.3636 11.4355 9.4861C11.4355 6.86619 13.1765 4.43017 15.8786 4.41882C16.5868 4.43017 17.2715 4.5891 17.8959 4.91828C18.5202 5.24634 18.9878 5.90473 19.3962 6.48933C20.0687 6.25776 20.825 6.00235 21.5097 6.11132C22.2057 6.20894 22.8669 6.46435 23.4431 6.87868C25.6282 8.49853 25.6517 11.4964 24.1514 13.6283C23.2383 14.9552 21.7615 15.869 20.3215 16.5025" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ChatBubbleIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'layout-header-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.0715 23.167C18.5571 26.7329 13.3532 27.5033 9.09463 25.5052C8.46595 25.2484 7.95053 25.0408 7.46053 25.0408C6.0957 25.049 4.39689 26.3917 3.51397 25.497C2.63105 24.6011 3.95543 22.8762 3.95543 21.4831C3.95543 20.9859 3.75897 20.4723 3.50588 19.8333C1.53549 15.5134 2.29591 10.232 5.81026 6.66723C10.2965 2.11399 17.5852 2.11399 22.0715 6.66605C26.5658 11.2263 26.5577 18.6149 22.0715 23.167Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.47 15.4007H18.4803" stroke="#4B164C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.8599 15.4007H13.8702" stroke="#4B164C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.24976 15.4007H9.26011" stroke="#4B164C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export const ArrorHeadLeft = ({ width = '21', height = '21', color = "#FFFFFF" }) => <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3722 16.304L7.62256 10.4707L13.3722 4.63733" stroke={color} strokeLinecap="round" />
</svg>

export const ArrowHeadRight = ({ width = '21', height = '21', color = "#FFFFFF" }) => <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.62256 4.63733L13.3722 10.4707L7.62256 16.304" stroke={color} strokeLinecap="round" />
</svg>


export const PremiumHeartIcon = () => <svg width="114" height="89" viewBox="0 0 114 89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_545_2427)">
        <path d="M103.513 39.7696C102.414 38.4812 101.088 37.4074 99.6379 36.5368C96.4564 34.5961 92.7208 33.7924 88.9956 34.2113C88.8839 33.9285 88.7152 33.6365 88.5667 33.3629C88.421 33.0847 88.2128 32.4939 87.9783 32.103L87.3394 31.188C87.0314 30.6592 86.6613 30.187 86.2512 29.7188C86.2315 29.6476 86.1915 29.5579 86.1258 29.4591L85.9901 29.3777C84.9089 28.1002 83.6584 27.0058 82.2364 26.0929L81.9836 25.9412C81.3399 25.5549 80.6724 25.2136 79.9698 24.9202L79.694 24.7547C78.9506 24.4304 78.1667 24.1788 77.3621 24.0086C67.1009 21.6679 58.4561 29.1429 56.1697 38.8394C55.1451 43.8808 55.2511 49.0754 56.4703 54.0251C58.3568 61.0357 60.9652 67.7916 64.2679 74.2138L64.6435 74.9426L65.4265 74.9404C72.6428 74.8002 79.804 73.9077 86.8228 72.2732C91.785 71.0333 96.4304 68.6591 100.374 65.3699C107.812 58.7652 110.342 47.6203 103.513 39.7696V39.7696Z" fill="url(#paint0_linear_545_2427)" />
    </g>
    <g opacity="0.5" filter="url(#filter1_f_545_2427)">
        <path d="M88.4313 43.2371C87.7374 42.4241 86.901 41.7465 85.9857 41.1971C83.978 39.9725 81.6207 39.4653 79.2699 39.7296C79.1995 39.5511 79.093 39.3669 78.9993 39.1942C78.9074 39.0187 78.776 38.6458 78.628 38.3992L78.2248 37.8218C78.0305 37.4881 77.7969 37.1901 77.5382 36.8947C77.5257 36.8497 77.5005 36.7931 77.459 36.7307L77.3734 36.6794C76.6911 35.8733 75.902 35.1826 75.0046 34.6066L74.8451 34.5108C74.4389 34.2671 74.0177 34.0517 73.5743 33.8665L73.4003 33.7621C72.9311 33.5575 72.4365 33.3987 71.9287 33.2913C65.4535 31.8142 59.9983 36.5312 58.5555 42.6501C57.9089 45.8314 57.9758 49.1095 58.7452 52.2329C59.9357 56.6569 61.5817 60.9201 63.6658 64.9728L63.9028 65.4327L64.3969 65.4313C68.9507 65.3428 73.4697 64.7797 77.8989 63.7482C81.0302 62.9658 83.9616 61.4676 86.4505 59.3919C91.144 55.2241 92.7407 48.1913 88.4313 43.2371V43.2371Z" fill="#EE2965" />
    </g>
    <g filter="url(#filter2_b_545_2427)">
        <path d="M97.0682 16.2591C96.8011 15.9968 96.4885 15.7861 96.1523 15.6226C95.4142 15.257 94.5762 15.1525 93.7642 15.317C93.7341 15.2569 93.6913 15.1959 93.6533 15.1386C93.6159 15.0801 93.5586 14.9541 93.4994 14.8726L93.3409 14.6835C93.2629 14.5731 93.1722 14.4763 93.0729 14.3812C93.0672 14.3659 93.0566 14.3469 93.0402 14.3264L93.0088 14.3111C92.746 14.0509 92.4494 13.8342 92.1187 13.6608L92.0601 13.6323C91.9109 13.5597 91.7573 13.4976 91.5969 13.4466L91.533 13.4155C91.363 13.3585 91.1856 13.3183 91.0051 13.2965C88.7007 12.9802 86.9424 14.7935 86.6272 16.9726C86.4994 18.1024 86.6235 19.244 86.9879 20.31C87.5392 21.8168 88.2445 23.2536 89.0962 24.6034L89.193 24.7566L89.3653 24.7409C90.9513 24.5701 92.5106 24.2347 94.0241 23.7387C95.0925 23.3695 96.0692 22.7567 96.8737 21.9561C98.3831 20.3577 98.7239 17.855 97.0682 16.2591V16.2591Z" fill="url(#paint1_linear_545_2427)" />
    </g>
    <g filter="url(#filter3_b_545_2427)">
        <mask id="path-4-outside-1_545_2427" maskUnits="userSpaceOnUse" x="-0.931515" y="-0.943404" width="92.9442" height="89.6849" fill="black">
            <rect fill="white" x="-0.931515" y="-0.943404" width="92.9442" height="89.6849" />
            <path d="M60.9665 4.32378C58.5238 3.94863 56.0363 4.02583 53.6043 4.44671C48.2404 5.3353 43.348 8.00799 39.6324 12.0212C39.2395 11.8153 38.7748 11.6536 38.3501 11.4929C37.9239 11.3245 37.1308 10.8703 36.4993 10.662L34.9214 10.2602C34.0772 9.96968 33.2183 9.80076 32.3192 9.67452C32.2294 9.61463 32.0998 9.55371 31.933 9.50716L31.7056 9.54651C29.2937 9.16603 26.8693 9.14895 24.4285 9.49593L24.0046 9.5693C22.9254 9.75606 21.8628 10.0154 20.8071 10.3608L20.3446 10.4409C19.2144 10.7913 18.1087 11.2605 17.0577 11.8394C3.49231 19.0338 1.06768 35.5302 7.78405 48.4202C11.4573 54.9654 16.5255 60.6024 22.5898 64.9078C31.3555 70.8536 40.6759 75.8301 50.4452 79.7762L51.5546 80.2233L52.4174 79.4745C60.2549 72.4417 67.3146 64.6304 73.5096 56.1352C77.8091 50.0362 80.6776 42.986 81.8991 35.5937C83.8199 21.209 75.9925 6.48683 60.9665 4.32378V4.32378Z" />
        </mask>
        <path d="M60.9665 4.32378C58.5238 3.94863 56.0363 4.02583 53.6043 4.44671C48.2404 5.3353 43.348 8.00799 39.6324 12.0212C39.2395 11.8153 38.7748 11.6536 38.3501 11.4929C37.9239 11.3245 37.1308 10.8703 36.4993 10.662L34.9214 10.2602C34.0772 9.96968 33.2183 9.80076 32.3192 9.67452C32.2294 9.61463 32.0998 9.55371 31.933 9.50716L31.7056 9.54651C29.2937 9.16603 26.8693 9.14895 24.4285 9.49593L24.0046 9.5693C22.9254 9.75606 21.8628 10.0154 20.8071 10.3608L20.3446 10.4409C19.2144 10.7913 18.1087 11.2605 17.0577 11.8394C3.49231 19.0338 1.06768 35.5302 7.78405 48.4202C11.4573 54.9654 16.5255 60.6024 22.5898 64.9078C31.3555 70.8536 40.6759 75.8301 50.4452 79.7762L51.5546 80.2233L52.4174 79.4745C60.2549 72.4417 67.3146 64.6304 73.5096 56.1352C77.8091 50.0362 80.6776 42.986 81.8991 35.5937C83.8199 21.209 75.9925 6.48683 60.9665 4.32378V4.32378Z" fill="#FF749F" fill-opacity="0.35" />
        <path d="M53.6043 4.44671L53.7513 5.33383L53.7577 5.33272L53.6043 4.44671ZM39.6324 12.0212L39.215 12.8176C39.5747 13.0062 40.0162 12.9301 40.2922 12.6321L39.6324 12.0212ZM38.3501 11.4929L38.0195 12.3292L38.0319 12.3339L38.3501 11.4929ZM36.4993 10.662L36.781 9.80804C36.7613 9.80153 36.7413 9.79571 36.7212 9.79059L36.4993 10.662ZM34.9214 10.2602L34.6287 11.1105C34.652 11.1185 34.6756 11.1255 34.6995 11.1316L34.9214 10.2602ZM32.3192 9.67452L31.8201 10.4225C31.9325 10.4975 32.0604 10.5462 32.1942 10.565L32.3192 9.67452ZM31.933 9.50716L32.1746 8.64105C32.046 8.60518 31.9111 8.59838 31.7796 8.62114L31.933 9.50716ZM31.7056 9.54651L31.5654 10.4347C31.6627 10.4501 31.7619 10.4493 31.8589 10.4325L31.7056 9.54651ZM24.4285 9.49593L24.302 8.60569C24.293 8.60696 24.2841 8.60837 24.2752 8.60991L24.4285 9.49593ZM24.0046 9.5693L23.8512 8.68328L24.0046 9.5693ZM20.8071 10.3608L20.9604 11.2468C21.0033 11.2394 21.0455 11.2289 21.0868 11.2154L20.8071 10.3608ZM20.3446 10.4409L20.1913 9.55485C20.1531 9.56146 20.1154 9.57054 20.0783 9.58201L20.3446 10.4409ZM17.0577 11.8394L17.479 12.6337C17.4832 12.6315 17.4873 12.6293 17.4915 12.627L17.0577 11.8394ZM7.78405 48.4202L6.98662 48.8357C6.99092 48.8439 6.99535 48.8521 6.99991 48.8602L7.78405 48.4202ZM22.5898 64.9078L22.0693 65.641C22.0745 65.6447 22.0798 65.6484 22.0851 65.652L22.5898 64.9078ZM50.4452 79.7762L50.1084 80.6099L50.1091 80.6102L50.4452 79.7762ZM51.5546 80.2233L51.2185 81.0573C51.5316 81.1835 51.889 81.1237 52.144 80.9024L51.5546 80.2233ZM52.4174 79.4745L53.0068 80.1537C53.0105 80.1504 53.0143 80.1471 53.018 80.1438L52.4174 79.4745ZM73.5096 56.1352L74.2362 56.665C74.239 56.6611 74.2418 56.6572 74.2446 56.6533L73.5096 56.1352ZM81.8991 35.5937L82.7863 35.7403C82.7878 35.7311 82.7892 35.7219 82.7904 35.7127L81.8991 35.5937ZM61.103 3.43501C58.5516 3.04317 55.9654 3.12554 53.451 3.56069L53.7577 5.33272C56.1072 4.92611 58.496 4.85409 60.83 5.21255L61.103 3.43501ZM53.4574 3.55961C47.8921 4.48155 42.8207 7.25403 38.9725 11.4103L40.2922 12.6321C43.8754 8.76196 48.5887 6.18905 53.7513 5.3338L53.4574 3.55961ZM40.0497 11.2248C39.5944 10.9861 39.0557 10.7984 38.6682 10.6518L38.0319 12.3339C38.494 12.5087 38.8846 12.6445 39.215 12.8176L40.0497 11.2248ZM38.6805 10.6566C38.5098 10.5891 38.2598 10.4611 37.8948 10.2837C37.5647 10.1232 37.1601 9.93307 36.781 9.80804L36.2177 11.5159C36.4701 11.5992 36.7778 11.7403 37.1086 11.9011C37.4046 12.0449 37.7642 12.2282 38.0196 12.3291L38.6805 10.6566ZM36.7212 9.79059L35.1432 9.38885L34.6995 11.1316L36.2775 11.5334L36.7212 9.79059ZM35.214 9.41C34.2942 9.09343 33.3729 8.91445 32.4442 8.78407L32.1942 10.565C33.0637 10.6871 33.8601 10.8459 34.6287 11.1105L35.214 9.41ZM32.8183 8.92655C32.6363 8.80515 32.4164 8.7085 32.1746 8.64105L31.6913 10.3733C31.7353 10.3855 31.7684 10.3981 31.7911 10.4081C31.8144 10.4184 31.8232 10.4246 31.8201 10.4225L32.8183 8.92655ZM31.7796 8.62114L31.5522 8.66049L31.8589 10.4325L32.0863 10.3932L31.7796 8.62114ZM31.8457 8.65831C29.3447 8.26377 26.8305 8.24624 24.302 8.60569L24.5551 10.3862C26.9081 10.0517 29.2427 10.0683 31.5654 10.4347L31.8457 8.65831ZM24.2752 8.60991L23.8512 8.68328L24.1579 10.4553L24.5819 10.3819L24.2752 8.60991ZM23.8512 8.68328C22.7316 8.87704 21.6266 9.14655 20.5275 9.50624L21.0868 11.2154C22.0989 10.8842 23.1192 10.6351 24.1579 10.4553L23.8512 8.68328ZM20.6538 9.47481L20.1913 9.55485L20.498 11.3269L20.9604 11.2468L20.6538 9.47481ZM20.0783 9.58201C18.89 9.95044 17.7282 10.4435 16.6239 11.0517L17.4915 12.627C18.4892 12.0775 19.5388 11.6321 20.6109 11.2997L20.0783 9.58201ZM16.6364 11.045C2.51398 18.5349 0.110619 35.6394 6.98662 48.8357L8.58148 48.0047C2.02474 35.4211 4.47065 19.5328 17.479 12.6337L16.6364 11.045ZM6.99991 48.8602C10.7379 55.5209 15.8959 61.2582 22.0693 65.641L23.1104 64.1746C17.155 59.9466 12.1767 54.4099 8.56819 47.9801L6.99991 48.8602ZM22.0851 65.652C30.903 71.6332 40.2797 76.6398 50.1084 80.6099L50.7819 78.9424C41.0721 75.0203 31.808 70.074 23.0946 64.1637L22.0851 65.652ZM50.1091 80.6102L51.2185 81.0573L51.8907 79.3893L50.7813 78.9422L50.1091 80.6102ZM52.144 80.9024L53.0068 80.1537L51.8281 78.7954L50.9653 79.5441L52.144 80.9024ZM53.018 80.1438C60.9021 73.0691 68.004 65.2111 74.2362 56.665L72.7831 55.6054C66.6252 64.0498 59.6077 71.8143 51.8169 78.8053L53.018 80.1438ZM74.2446 56.6533C78.6232 50.442 81.543 43.2645 82.7863 35.7403L81.012 35.4471C79.8123 42.7075 76.995 49.6304 72.7747 55.6171L74.2446 56.6533ZM82.7904 35.7127C84.7557 20.9941 76.7499 5.6874 61.0946 3.43376L60.8384 5.21379C75.2351 7.28626 82.884 21.4239 81.0078 35.4747L82.7904 35.7127Z" fill="url(#paint2_linear_545_2427)" mask="url(#path-4-outside-1_545_2427)" />
    </g>
    <g filter="url(#filter4_bd_545_2427)">
        <path d="M71.1958 26.9616C71.361 28.6042 70.2315 30.1057 68.6586 30.4215C67.7967 30.4873 66.9213 30.2458 66.2683 29.684C65.6154 29.1222 65.202 28.3165 65.1225 27.4212L65.1018 27.3017C64.6356 24.6077 62.5613 22.4619 59.9307 21.9644C58.2126 21.6703 57.0578 20.0441 57.3173 18.332C57.6153 16.6132 59.2022 15.4613 60.8765 15.7313C66.179 16.7587 70.2976 21.0833 71.1164 26.503L71.1958 26.9616Z" fill="url(#paint3_linear_545_2427)" />
        <path d="M65.3016 27.4053L65.301 27.3979L65.2997 27.3905L65.279 27.271C64.8004 24.5055 62.6708 22.2995 59.9641 21.7877L59.9641 21.7877L59.961 21.7872C58.3413 21.5099 57.251 19.9766 57.4948 18.3608C57.7772 16.7376 59.2731 15.6565 60.8451 15.9084C66.0703 16.9221 70.1311 21.1851 70.9386 26.5298L70.9386 26.5298L70.9392 26.5336L71.0175 26.9859C71.1695 28.5301 70.1086 29.9411 68.634 30.243C67.8164 30.3028 66.9947 30.0718 66.3856 29.5477C65.769 29.0172 65.3771 28.255 65.3016 27.4053Z" stroke="url(#paint4_linear_545_2427)" stroke-width="0.359675" />
    </g>
    <defs>
        <filter id="filter0_b_545_2427" x="43.7822" y="11.8867" width="75.4082" height="74.7454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.84472" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_545_2427" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_545_2427" result="shape" />
        </filter>
        <filter id="filter1_f_545_2427" x="41.9296" y="16.833" width="65.2033" height="64.7851" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="8.0927" result="effect1_foregroundBlur_545_2427" />
        </filter>
        <filter id="filter2_b_545_2427" x="74.8889" y="1.57102" width="34.9668" height="34.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.84472" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_545_2427" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_545_2427" result="shape" />
        </filter>
        <filter id="filter3_b_545_2427" x="-18.2995" y="-18.3977" width="122.963" height="121.101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.7903" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_545_2427" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_545_2427" result="shape" />
        </filter>
        <filter id="filter4_bd_545_2427" x="43.7932" y="2.20422" width="40.9066" height="41.7157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.74391" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_545_2427" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="4.49594" dy="4.49594" />
            <feGaussianBlur stdDeviation="4.49594" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.321569 0 0 0 0 0.54902 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_545_2427" result="effect2_dropShadow_545_2427" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_545_2427" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_545_2427" x1="79.3107" y1="58.0193" x2="27.5723" y2="54.522" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF759F" />
            <stop offset="1" stop-color="#FF196E" />
        </linearGradient>
        <linearGradient id="paint1_linear_545_2427" x1="92.0938" y1="20.7463" x2="80.6355" y2="20.9799" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF759F" />
            <stop offset="1" stop-color="#FF196E" />
        </linearGradient>
        <linearGradient id="paint2_linear_545_2427" x1="13.9713" y1="20.0919" x2="70.537" y2="72.2744" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.25" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_545_2427" x1="68.6108" y1="17.1505" x2="55.0858" y2="19.8446" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="paint4_linear_545_2427" x1="59.0509" y1="17.7665" x2="71.0131" y2="25.8347" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.25" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
    </defs>
</svg>


