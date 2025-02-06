


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
export const LocationIcon = ({ width = '17', height = '17', className = 'location-icon', color = '#18181C', fillColor }) => <svg width={width} height={height} viewBox="0 0 24 25" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
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
    <path d="M1 11.3474C1 5.63269 5.63269 1 11.3474 1C17.0621 1 21.6948 5.63269 21.6948 11.3474C21.6948 17.0621 17.0621 21.6948 11.3474 21.6948C5.63269 21.6948 1 17.0621 1 11.3474Z" stroke="white" strokeWidth="2" />
    <path d="M7.69629 7.59741L15.0887 15.0974" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.0887 7.59741L7.69629 15.0974" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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


export const DiamondIcon = ({ width = '25', height = '25', color = "#4B164C", className = 'diamond-icon' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const ArrowHeadRight = ({ width = '21', height = '21', color = "#FFFFFF", strokeWidth = '1' }) => <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.62256 4.63733L13.3722 10.4707L7.62256 16.304" strokeWidth={strokeWidth} stroke={color} strokeLinecap="round" />
</svg>

export const AmoreCoinIcon = ({ width = '23', height = '23', color = "#FFFFFF" }) => <svg width={width} height={height} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3217 23.9381C17.5487 23.9381 22.5966 18.8901 22.5966 12.6632C22.5966 6.43629 17.5487 1.38837 11.3217 1.38837C5.0948 1.38837 0.046875 6.43629 0.046875 12.6632C0.046875 18.8901 5.0948 23.9381 11.3217 23.9381Z" fill="#E45A5A" />
    <path d="M11.3217 22.6116C17.5487 22.6116 22.5966 17.5637 22.5966 11.3368C22.5966 5.10984 17.5487 0.0619202 11.3217 0.0619202C5.0948 0.0619202 0.046875 5.10984 0.046875 11.3368C0.046875 17.5637 5.0948 22.6116 11.3217 22.6116Z" fill="#FFA5A6" />
    <path d="M11.3223 21.2852C16.4503 21.2852 20.6074 17.1281 20.6074 12C20.6074 6.87196 16.4503 2.71484 11.3223 2.71484C6.19422 2.71484 2.03711 6.87196 2.03711 12C2.03711 17.1281 6.19422 21.2852 11.3223 21.2852Z" fill="#FFD7D7" />
    <path d="M11.3223 20.6219C16.4503 20.6219 20.6074 16.4648 20.6074 11.3368C20.6074 6.20872 16.4503 2.05161 11.3223 2.05161C6.19422 2.05161 2.03711 6.20872 2.03711 11.3368C2.03711 16.4648 6.19422 20.6219 11.3223 20.6219Z" fill="#F87070" />
    <path d="M8.71721 6.79943C7.67404 7.07879 6.86387 7.86852 6.53027 8.94298C6.31317 9.64139 6.40848 10.5708 6.76856 11.3068C6.89565 11.5647 11.1901 15.9539 11.3172 15.9539C11.4019 15.9539 14.4572 12.854 15.3468 11.8655C15.8552 11.3014 16.0352 10.9737 16.157 10.3828C16.2523 9.92075 16.2523 9.63064 16.157 9.17399C16.0458 8.62602 15.7969 8.15325 15.4104 7.73421C14.8014 7.07879 14.1872 6.77794 13.3505 6.72959C12.7522 6.69736 12.3074 6.79406 11.7408 7.08953L11.3278 7.30443L10.883 7.07342C10.6394 6.94985 10.3111 6.81555 10.1575 6.77794C9.78155 6.69198 9.08258 6.70273 8.71721 6.79943ZM11.6084 9.39426C11.4495 10.4687 11.4072 10.4204 12.3974 10.4204H13.1122L13.2182 10.5923C13.2764 10.689 13.3241 10.8072 13.3241 10.8609C13.3241 10.9093 13.1758 11.1241 13.001 11.3444C12.3974 12.075 10.9677 13.6975 10.9306 13.6975C10.8724 13.6975 10.8724 13.676 11.0206 12.752C11.1795 11.7688 11.1742 11.7957 11.0683 11.6882C11.0047 11.6184 10.8512 11.6023 10.3005 11.6023C9.63858 11.6023 9.6068 11.5969 9.48501 11.468C9.33145 11.3175 9.32086 11.194 9.44265 11.0113C9.54326 10.8609 10.8247 9.31905 11.3595 8.7066C11.7884 8.21772 11.7884 8.22309 11.6084 9.39426Z" fill="#FFA5A6" />
</svg>

export const SearchIcon = ({ width = '22', height = '22', color = "#EBE9E1", strokeWidth = '.7' }) => <svg width={width} height={height} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.96995 5.9248C4.89776 7.0163 3.15995 7.0163 2.08782 5.9248C1.01565 4.8333 1.01565 3.06436 2.08782 1.97289C3.15995 0.881432 4.89776 0.881432 5.96995 1.97289C7.04204 3.06436 7.04204 4.8333 5.96995 5.9248ZM5.96995 5.9248L7.45749 7.4392" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const HeartLineIcon = ({ width = '28', height = '28', color = "#FFFFFF", fill = "none", className = '' }) => <svg className={className} width={width} height={height} viewBox="0 0 28 29" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0832 11.495C25.0717 8.53653 23.5195 5.75426 20.4594 4.76845C18.3581 4.09036 16.0692 4.46745 14.2917 7.01951C12.5141 4.46745 10.2252 4.09036 8.12396 4.76845C5.0635 5.75437 3.51134 8.53717 3.5001 11.4961C3.4718 17.3803 9.4344 21.8832 14.2902 24.0354L14.2917 24.0347L14.2932 24.0354C19.1492 21.8831 25.1123 17.3799 25.0832 11.495Z" stroke={color} strokeWidth="2" strokeLinecap="square" />
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

export const EyeIcon = ({ width = '18', height = '18', color = '#FFFFFF' }) => <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.8228 13.8947C11.4472 13.8947 13.8477 12.035 15.1992 8.93636C13.8477 5.83766 11.4472 3.97803 8.8228 3.97803C6.20126 3.97803 3.80072 5.83766 2.44922 8.93636C3.80072 12.0365 6.20126 13.8947 8.82564 13.8947H8.8228Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.0049 8.94008C11.0049 10.1253 10.0288 11.0873 8.82604 11.0873C7.62258 11.0873 6.64648 10.1253 6.64648 8.94008C6.64648 7.75405 7.62258 6.79211 8.82604 6.79211C10.0288 6.79211 11.0049 7.75405 11.0049 8.94008Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
