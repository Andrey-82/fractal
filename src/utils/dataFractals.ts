export const fractals = [
    {
        "type": "complex",
        "name": "Мандельброт z2",
        "value": "newX=x*x-y*y+tx;newY=2.0*x*y+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z3",
        "value": "newX=x*x*x-3.*x*y*y+tx;newY=3.*x*x*y-y*y*y+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z4",
        "value": "newX=pow(x, 4.)-6.*x*x*y*y+pow(y,4.)+tx;newY=4.*pow(x,3.)*y-4.*x*y*y*y+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z5",
        "value": "newX=pow(x,5.)-10.*x*x*x*y*y+5.*x*pow(y,4.)+tx;newY=5.*pow(x,4.)*y-10.*x*x*y*y*y+pow(y,5.)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z6",
        "value": "newX=pow(x,6.)-15.*pow(x,4.)*y*y+15.*x*x*pow(y,4.)-pow(y,6.)+tx;newY=6.*pow(x,5.)*y-20.*pow(x,3.)*y*y*y+6.*pow(y,5.)*x+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z7",
        "value": "newX=pow(x,7.)-21.*pow(x,5.)*y*y+35.*pow(x,3.)*pow(y,4.)-7.*x*pow(y,6.)+tx;newY=7.*pow(x,6.)*y-35.*pow(x,4.)*pow(y,3.)+21.*pow(x,2.)*pow(y,5.)-pow(y,7.)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт z2 cos(tx) sin(tx)",
        "value": "newX=x*x-y*y+cos(tx);newY=2.*x*y+sin(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт xycos(tx)",
        "value": "newX=2.*y*x*cos(2.*x)+tx;newY=2.*x*y*sin(2.*y)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт cos(z)",
        "value": "newX=cos(x)*(exp(y)+exp(-y))/2.+tx;newY=-sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт sin(z)",
        "value": "newX=sin(x)*(exp(y)+exp(-y))/2.+tx;newY=cos(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт sin^2(z)",
        "value": "float sx, sy; sx=sin(x)*(exp(y)+exp(-y))/2.;sy=cos(x)*(exp(y)-exp(-y))/2.;newX=sx*sx-sy*sy+tx;newY=2.0*sx*sy+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт tg(z)",
        "value": "float c=cos(x);float s=sin(x);float e=exp(2.0*y);float r=exp(-2.0*y);newX = x*x-y*y+sin(2.0*x)/2.0/(c*c+(e+r-2.0)/4.0)+tx;newY=2.0*x*y+(e-r)/4.0/(c*c+(e+r-2.0)/4.0)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт exp(z)",
        "value": "newX=exp(x)*cos(y)+tx;newY=exp(x)*sin(y)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт exp(z) в движении",
        "value": "newX=0.5*log(x*x+y*y+0.0000001)+sin(0.25*uTime);newY=atan(y/(x+0.000001))+cos(PI/6.0*0.5*uTime);"
    },
    {
        "type": "complex",
        "name": "Мандельброт z2/cos(z)",
        "value": "newX=x*x-y*y+x/cos(x*x+y*y)+tx;newY=2.*x*y-y/cos(x*x+y*y)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт 1/z",
        "value": "newX=x/(x*x+y*y+0.000001)+tx;newY=-y/(x*x+y*y+0.000001)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт heart",
        "value": "newX=x*x-y*y+x/cos(x*x+y*y)+tx;newY=2.*x*y-y/log(x*x+y*y)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт xyPI",
        "value": "newX=x*y*cos(y*PI)+tx;newY=y*x*sin(x*PI)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт --!z2",
        "value": "newX=x*x-y*y+tx;newY=-2.*x*y+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A2",
        "value": "newX=x*x-y*y+cos(tx);newY=sin(y-x)*cos(x-y)+cos(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A3",
        "value": "newX=y+cos(tx)*(tx)*(tx);newY=x+cos(ty)*(ty)*(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A4",
        "value": "newX=cos(x)*x*x+cos(tx)*(tx)*(tx);newY=cos(y)*y*y+cos(ty)*(ty)*(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A5",
        "value": "newX=exp(x*y)+cos(tx)*(tx)*(tx);newY=exp(y*x)+cos(ty)*(ty)*(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A6",
        "value": "newX=exp(x*y)*cos(y*tx)+cos(tx)*(tx)*(tx);newY=exp(y*x)*cos(x*ty)+cos(ty)*(ty)*(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A7",
        "value": "newX=x*x-y*y+x/log(x*x+y*y)+tx;newY=2.*x*y-y/log(x*x+y*y)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A8",
        "value": "newX=x*x-y*y+x/log(x*x+y*y)+cos(tx);newY=2.*x*y-y/log(x*x+y*y)+cos(ty);"
    },
    {
        "type": "complex",
        "name": "Мандельброт A12",
        "value": "newX=x*(cos(x)*(exp(y)+exp(-y))/2.)+y*(sin(x)*(exp(y)-exp(-y))/2.)+x;newY=y*(cos(x)*(exp(y)+exp(-y))/2.)-x*(sin(x)*(exp(y)-exp(-y))/2.)+ ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A13",
        "value": "newX=x+cos(x)*(exp(y)+exp(-y))/2.+tx;newY=y-(sin(x)*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A14",
        "value": "newX=x*x-y*y+cos(x)*(exp(y)+exp(-y))/2.+tx;newY=2.*x*y-(sin(x)*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A15",
        "value": "newX=(x*x-y*y)*cos(x)*(exp(y)+exp(-y))/2.+2.*x*y*(sin(x)*(exp(y)-exp(-y))/2.)+tx;newY= 2.*x*y*(cos(x)*(exp(y)+exp(-y))/2.)-(x*x-y*y)*sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A16",
        "value": "newX=(-x*x+y*y)*cos(x)*(exp(y)+exp(-y))/2.+2.*x*y*(sin(x)*(exp(y)-exp(-y))/2.)+tx;newY= 2.*x*y*(cos(x)*(exp(y)+exp(-y))/2.)-(-x*x+y*y)*sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A17",
        "value": "newX=2./3.*x+(x*x-y*y)/(3.*(x*x+y*y)*(x*x+y*y))+log(tx);newY= 2./3.*y-(2.*x*y)/(3.*(x*x+y*y)*(x*x+y*y))+ty;"
    },
    {
        "type": "complex",
        "name": "Мандельброт A18",
        "value": "newX=2./3.*x+(x*x-y*y)/(3.*(x*x+y*y)*(x*x+y*y));newY= 2./3.*y-(2.*x*y)/(3.*(x*x+y*y)*(x*x+y*y));"
    },
    {
        "type": "complex",
        "name": "Мандельброт A19",
        "value": "newX=3./4.*x+3./4.*(x*x*x*x-6.*x*x*y*y+y*y*y*y)/(pow((x*x+y*y),3.));newY= 3./4.*y+3./4.*(4.*x*y*y*y-4.*x*x*x*y)/(pow((x*x+y*y),3.));"
    },
    {
        "type": "complex",
        "name": "Мандельброт A20",
        "value": "newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+tx;newY= y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "type": "complex",
        "name": "JA20",
        "value": "newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+sin(0.25*uTime)*1.0-0.20;newY= y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+cos(PI/6.0*0.5*uTime)*1.0+0.20;"
    },
    {
        "type": "complex",
        "name": "M--z",
        "value": "newX=x*2.+cos(tx);newY=2.*y+sin(ty);"
    },
    {
        "type": "complex",
        "name": "M--z2--move",
        "value": "newX=x*x-y*y+tx*(sin(uTime));newY= 2.*x*y+ty*(cos(uTime));"
    },
    {
        "type": "complex",
        "name": "M--z2--cos--move",
        "value": "newX=x*x-y*y-x*(sin(uTime+ty));newY= 2.*x*y-y*(cos(uTime+tx));"
    },
    {
        "type": "complex",
        "name": "M--z2--t*cos--move",
        "value": "newX=x*x-y*y-x*(sin(uTime+tx));newY= 2.*x*y-ty*(cos(uTime+ty));"
    },
    {
        "type": "complex",
        "name": "M--z2--t*cos--wave-move",
        "value": "newX=x*x-y*y+tx+(sin(1.0*uTime+tx));newY= 2.*x*y+ty+(cos(1.0*uTime+tx));"
    },
    {
        "type": "complex",
        "name": "M--z2--cos",
        "value": "newX=x*x-y*y+(cos(tx));newY=2.*x*y+(sin(ty));"
    },
    {
        "type": "complex",
        "name": "M--1",
        "value": "newX=(x*x-y*y)*(cos(x)*(exp(2.*y)+exp(-2.*y))/2.) +2.*x*y*sin(x)*(exp(2.*y)-exp(-2.*y))/2.+tx;newY= 2.*x*y*cos(x)*(exp(2.*y)+exp(-2.*y))/2.-(x*x-y*y)*sin(x)*(exp(2.*y)-exp(-2.*y))/2.+ty;"
    },
    {
        "type": "complex",
        "name": "J2-move",
        "value": "newX=x*x-y*y+cos(0.1*uTime)/3.0+2.0*cos(0.1*uTime);newY= 2.0*x*y+sin(0.1*uTime)/3.0+0.2;"
    },
    {
        "type": "complex",
        "name": "Jxy2-move",
        "value": "newX=-4.0*x*y-y+uTime/300.0;newY=2.0*x*x-2.0*y*y+x+uTime/300.0;"
    },
    {
        "type": "complex",
        "name": "J3",
        "value": "newX=x*x*x-3.0*x*y*y+0.02;newY=3.0*x*x*y-y*y*y+0.02;"
    },
    {
        "type": "complex",
        "name": "JA20",
        "value": "newX=4./5.*x-(x*x*x*x-6.0*x*x*y*y+y*y*y*y)/(5.* pow((x*x+y*y), 4.0))-0.02;newY= 4./5.*y+(4.0*x*x*x*y-4.0*x*y*y*y)/(5.* pow((x*x+y*y), 4.0))-0.02;"
    },
    {
        "type": "complex",
        "name": "JcosZ",
        "value": "newX=cos(x)*(exp(y)+exp(-y))/2.-0.02;newY=-sin(x)*(exp(y)-exp(-y))/2.-0.02;"
    },
    {
        "type": "complex",
        "name": "JtgZ--move",
        "value": "float c=cos(x);float s=sin(x);float e=exp(2.0*y);float r=exp(-2.0*y);newX=x*x-y*y+sin(2.0*x)/2.0/(c*c+(e+r-2.0)/4.0)+sin(0.25*uTime);newY=2.0*x*y+(e-r)/4.0/(c*c+(e+r-2.0)/4.0)+cos(PI/6.0*0.5*uTime);"
    },
    {
        "type": "complex",
        "name": "z2+z",
        "value": "newX=x*x-y*y-x+tx;newY=2.0*x*y+y+ty;"
    },
    {
        "type": "complex",
        "name": "z/(cosZ+i*sinZ)",
        "value": "newX=exp(y)*(x*cos(x)+y*sin(x))+tx;newY=exp(y)*(y*cos(x)-x*sin(x))+ty;"
    },
    {
        "type": "complex",
        "name": "star-move",
        "value": "newX=tx*tx-ty*ty+x+cos(uTime)*tx*ty*x*y;newY=2.0*tx*ty+y+sin(uTime)*ty*tx;"
    },
    {
        "type": "ifs",
        "name": "Салфетка Серпинского",
        "value": "if(areaCond(2.0*x, 2.0*y)){newX=2.0*x; newY=2.0*y; x=newX; y=newY; continue;}if(areaCond(2.0*x-1.0, 2.0*y)){newX=2.0*x-1.0; newY=2.0*y; x=newX; y=newY; continue;}if(areaCond(2.0*x, 2.0*y-1.0)){newX=2.0*x; newY=2.0*y-1.0; x=newX; y=newY; continue;}"
    },
    {
        "type": "ifs",
        "name": "Ковер Серпинского",
        "value": "if(areaCond(3.*x,3.*y)){newX=3.*x;newY=3.*y;x=newX;y=newY;continue;}\nif(areaCond(3.*x-2.,3.*y-2.)){newX=3.*x-2.;newY=3.*y-2.;x=newX;y=newY;continue;}\nif(areaCond(3.*x-2.,3.*y)){newX=3.*x-2.;newY=3.*y;x=newX;y=newY;continue;}\nif(areaCond(3.*x,3.*y-2.)){newX=3.*x;newY=3.*y-2.;x=newX;y=newY;continue;}\nif(areaCond(3.*x-1.,3.*y)){newX=3.*x-1.;newY=3.*y;x=newX;y=newY;continue;}\nif(areaCond(3.*x,3.*y-1.)){newX=3.*x;newY=3.*y-1.;x=newX;y=newY;continue;}\nif(areaCond(3.*x-2.,3.*y-1.)){newX=3.*x-2.;newY=3.*y-1.;x=newX;y=newY;continue;}\nif(areaCond(3.*x-1.,3.*y-2.)){newX=3.*x-1.;newY=3.*y-2.;x=newX;y=newY;continue;}\n"
    },
    {
        "type": "ifs",
        "name": "Жулиа",
        "value": "if(areaCond(x*x-y*y-sin(uTime)*1.25,2.*x*y+cos(uTime)*1.55)){newX=x*x-y*y-sin(uTime)*1.25;newY=2.*x*y+cos(uTime)*1.55;x=newX;y=newY;continue;}if(areaCond(0.9*x*x+0.9*y*y-sin(uTime)*6.33,-1.2*x*y-cos(uTime)*6.24)){newX=0.9*x*x+0.9*y*y-sin(uTime)*6.33;newY=-1.2*x*y-cos(uTime)*6.24;x=newX;y=newY;continue;}\n"
    },
    {
        "type": "ifs",
        "name": "Кривая Коха",
        "value": "if(areaCond(3.*x,3.*y)){newX=3.*x;newY=3.*y;x=newX;y=newY;continue;}if(areaCond(3.*x-1200.,3.*y)){newX=3.*x-1200.;newY=3.*y;x=newX;y=newY;continue;}if(areaCond(1.5*x+2.61*y-300.,1.5*y-2.61*x+522.)){newX=1.5*x+2.61*y-300.;newY=1.5*y-2.61*x+522.;x=newX;y=newY;continue;}if(areaCond(cos(PI/3.)*3.*x-sin(PI/3.)*3.*y,sin(PI/3.)*3.*x+cos(PI/3.)*3.*y-1040.)){newX=cos(PI/3.)*3.*x-sin(PI/3.)*3.*y;newY=sin(PI/3.)*3.*x+cos(PI/3.)*3.*y-1040.;x=newX;y=newY;continue;}\n"
    },
    {
        "type": "ifs3d",
        "name": "Тетраэдр Серпинского",
        "value": `if(areaCond(2.0*x, 2.0*y, 2.0*z)){newX=2.0*x; newY=2.0*y; newZ=2.0*z; x=newX; y=newY; z=newZ; continue;}
                if(areaCond(2.0*x-1.0, 2.0*y, 2.*z)){newX=2.0*x-1.0; newY=2.0*y; x=newX; y=newY; newZ=2.0*z; z=newZ; continue;}
                if(areaCond(2.0*x, 2.0*y, 2.*z-1.)){newX=2.0*x; newY=2.0*y; x=newX; y=newY; newZ=2.0*z-1.; z=newZ; continue;}
                if(areaCond(2.0*x, 2.0*y-1.0, 2.*z)){newX=2.0*x; newY=2.0*y-1.0; x=newX; y=newY; newZ=2.0*z; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Губка Менгера",
        "value": `if(areaCond(3.0*x, 3.0*y, 3.0*z)){newX=3.0*x; newY=3.0*y; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y, 3.0*z)){newX=3.0*x-1.0; newY=3.0*y; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y, 3.0*z)){newX=3.0*x-2.0; newY=3.0*y; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-1.0, 3.0*z)){newX=3.0*x; newY=3.0*y-1.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-2.0, 3.0*z)){newX=3.0*x; newY=3.0*y-2.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y, 3.0*z-1.0)){newX=3.0*x; newY=3.0*y; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y, 3.0*z-2.0)){newX=3.0*x; newY=3.0*y; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-1.0, 3.0*z)){newX=3.0*x-2.0; newY=3.0*y-1.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-2.0, 3.0*z)){newX=3.0*x-2.0; newY=3.0*y-2.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y-2.0, 3.0*z)){newX=3.0*x-1.0; newY=3.0*y-2.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-2.0, 3.0*z-1.0)){newX=3.0*x; newY=3.0*y-2.0; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-2.0, 3.0*z-2.0)){newX=3.0*x; newY=3.0*y-2.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-1.0, 3.0*z-2.0)){newX=3.0*x; newY=3.0*y-1.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y, 3.0*z-2.0)){newX=3.0*x-1.0; newY=3.0*y; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y-2.0, 3.0*z-2.0)){newX=3.0*x-1.0; newY=3.0*y-2.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-2.0, 3.0*z-2.0)){newX=3.0*x-2.0; newY=3.0*y-2.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-2.0, 3.0*z-1.0)){newX=3.0*x-2.0; newY=3.0*y-2.0; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-1.0, 3.0*z-2.0)){newX=3.0*x-2.0; newY=3.0*y-1.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y, 3.0*z-1.0)){newX=3.0*x-2.0; newY=3.0*y; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y, 3.0*z-2.0)){newX=3.0*x-2.0; newY=3.0*y; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Полугубка Менгера",
        "value": `if(areaCond(3.0*x-1.0, 3.0*y-1.0, 3.0*z)){newX=3.0*x-1.0; newY=3.0*y-1.0; newZ=3.0*z; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y-1.0, 3.0*z-2.0)){newX=3.0*x-1.0; newY=3.0*y-1.0; newZ=3.0*z-2.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x, 3.0*y-1.0, 3.0*z-1.0)){newX=3.0*x; newY=3.0*y-1.0; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-2.0, 3.0*y-1.0, 3.0*z-1.0)){newX=3.0*x-2.0; newY=3.0*y-1.0; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y-2.0, 3.0*z-1.0)){newX=3.0*x-1.0; newY=3.0*y-2.0; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}
                    if(areaCond(3.0*x-1.0, 3.0*y, 3.0*z-1.0)){newX=3.0*x-1.0; newY=3.0*y; newZ=3.0*z-1.0; x=newX; y=newY; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Фр",
        "value": `if(areaCond(z*z+y*y, z*z+x*x, x*x+y*y)){newX=z*z+y*y; newY=z*z+x*x; newZ=x*x+y*y; x=newX; y=newY; z=newZ; continue;}
        if(areaCond(2.0*y*z, 2.0*z*x, 2.0*y*x)){newX=2.0*y*z; newY=2.0*x*z; newZ=2.0*x*y; x=newX; y=newY; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Фр2",
        "value": `if(areaCond(2.0*x, 2.0*y, 2.0*z)){newX=2.0*x; newY=2.0*y; newZ=2.0*z; x=newX; y=newY; z=newZ; continue;}
                if(areaCond(2.0*x-cos(uTime), 2.0*y, 2.*z)){newX=2.0*x-cos(uTime); newY=2.0*y; x=newX; y=newY; newZ=2.0*z; z=newZ; continue;}
                if(areaCond(2.0*x, 2.0*y, 2.*z-cos(uTime))){newX=2.0*x; newY=2.0*y; x=newX; y=newY; newZ=2.0*z-cos(uTime); z=newZ; continue;}
                if(areaCond(2.0*x, 2.0*y-cos(uTime), 2.*z)){newX=2.0*x; newY=2.0*y-cos(uTime); x=newX; y=newY; newZ=2.0*z; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Фр3",
        "value": `if(areaCond(x*x, y*y, z*z)){newX=x*x; newY=y*y; newZ=z*z; x=newX; y=newY; z=newZ; continue;}
        if(areaCond(2.0*y*z, 2.0*x*z, 2.0*x*y)){newX=2.0*y*z; newY=2.0*x*z; newZ=2.0*x*y; x=newX; y=newY; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Жулиа 3d",
        "value": `
            if(areaCond(x*x-y*y-z*z+cos(uTime), 2.0*x*y+sin(0.1*uTime), 2.0*x*z+sin(0.1*uTime)))
                {newX=x*x-y*y-z*z+cos(uTime); newY=2.0*x*y+sin(0.1*uTime); newZ=2.0*x*z+sin(0.1*uTime); x=newX; y=newY; z=newZ; continue;}`
    },
    {
        "type": "ifs3d",
        "name": "Жулиа2 3d",
        "value": `
            if(areaCond(2.0*y*z-x*x+sin(uTime)+tx, 2.0*x*z-y*y+cos(uTime)+ty, 2.0*x*y-z*z))
                {newX=2.0*y*z-x*x+sin(uTime)+tx; newY=2.0*x*z-y*y+cos(uTime)+ty; newZ=2.0*x*y-z*z; x=newX; y=newY; z=newZ; continue;}`
    },
];

export const motions = [
    {
        "name": "Без анимации",
        "value": ";"
    },
    {
        "name": "Loop",
        "value": "float r=(tx-0.5*sin(speedMotion*uTime))*(tx-0.5*sin(speedMotion*uTime))+(ty-cos(speedMotion*uTime))*(ty-cos(speedMotion*uTime));if (r<0.25){tx=(0.4+0.6*(2.0*r))*(tx-0.5*sin(speedMotion*uTime))+0.5*sin(speedMotion*uTime);ty=(0.4+0.6*(2.0*r))*(ty-cos(speedMotion*uTime))+cos(speedMotion*uTime);};"
    },
    {
        "name": "rot",
        "value": "float tmp = tx;tx = cos(speedMotion*uTime)*tx - sin(speedMotion*uTime)*ty;ty = sin(speedMotion*uTime)*tmp + cos(speedMotion*uTime)*ty;"
    },
    {
        "name": "14N",
        "value": "float tmpy=y; float tmp=x;x=cos(speedMotion*uTime)*(x)-sin(speedMotion*uTime)*(y);y=sin(speedMotion*uTime)*(tmp) + cos(speedMotion*uTime)*(y);x=1.0/exp(uTime)*x;y=1.0/exp(uTime)*y;"
    },
    {
        "name": "16",
        "value": "float tmp=tx;float c=cos(0.1*uTime)/(1.0+exp(-6.0*sin(0.1*uTime)));float p=c+sin(0.1*uTime), q=c+cos(0.1*uTime);tx=cos(speedMotion*uTime)*(tx-p) - sin(speedMotion*uTime)*(ty-q)+p;ty=sin(speedMotion*uTime)*(tmp-p) + cos(speedMotion*uTime)*(ty-q)+q;tx=1.0/pow(1.15,uTime)*(tx-p)+p;ty=1.0/pow(1.15,uTime)*(ty-q)+q;"
    }
];

export const colorStyles = [
    {
        "name": "gamma",
        "value": "r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;"
    },
    {
        "name": "gamma2",
        "value": "r = 1.0-abs(sin(mod(float(i),3.0)*127.0));g = 1.0-abs(sin(mod(float(i)/3.0,3.0)*127.0));b = 1.0-abs(sin(mod(float(i)/9.0,3.0)*127.0));"
    },
    {
        "name": "gamma3",
        "value": "r = 1.0-abs(atan(mod(float(i),3.0)*127.0)/PI);g = 1.0-abs(atan(mod(float(i)/3.0,3.0)*127.0)/PI);b = 1.0-abs(atan(mod(float(i)/9.0,3.0)*127.0)/PI*2.0);"
    },
    {
        "name": "gamma4",
        "value": "r = log(abs(sin(mod(float(i),3.0)*127.0)*1.7+1.0));g = log(abs(sin(mod(float(i)/3.0,3.0)*127.0)*1.7+1.0));b = log(abs(sin(mod(float(i)/9.0,3.0)*127.0)*1.7+1.0));"
    },
    {
        "name": "gamma5",
        "value": "r = (abs(sin(mod(float(i),3.0)*127.0*tx*ty)));g = (abs(sin(mod(float(i)/3.0,3.0)*127.0*tx*ty)));b = (abs(sin(mod(float(i)/9.0,3.0)*127.0*tx*ty)));"
    },
    {
        "name": "gamma6",
        "value": "r = abs(sin(pow(abs(mod(float(i*i),3.0)*127.0),abs(ty*tx))));g = abs(sin(pow(abs(mod(float(i*2*i)/3.0,3.0)*127.0),abs(ty*tx))));b = abs(sin(pow(abs(mod(float(i*3*i)/9.0,3.0)*127.0),abs(ty*tx))));"
    },
    {
        "name": "gamma7",
        "value": "r = abs(sin(float(i)*PI/255.0));g = abs(sin(float(i)*PI/255.0*2.0));b = abs(sin(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gamma8",
        "value": "r = abs(sin(float(i)*PI/255.0+tx+ty));g = abs(sin(float(i)*PI/255.0*2.0+tx+ty));b = abs(sin(float(i)*PI/255.0*3.0+tx+ty));"
    },
    {
        "name": "gamma9",
        "value": "r = abs(sin(float(i)*PI/255.0+tx*ty*float(i)));g = abs(sin(float(i)*PI/255.0*2.0+tx*ty*float(i)));b = abs(sin(float(i)*PI/255.0*3.0+tx*ty*float(i)));"
    },
    {
        "name": "gamma10",
        "value": "r = abs(((float(i))*127.0)/255.0*sin(tx+ty));g = abs(((float(i)/3.0)*127.0)/255.0*sin(tx));b = abs(((float(i)/9.0)*127.0)/255.0*sin(ty));"
    },
    {
        "name": "gamma11",
        "value": "r = abs(mod(float(i*i*i)*13.0*tx*ty,255.0)/255.0); g = abs(mod(float(i*i)*11.0*tx*ty,255.0)/255.0); b = abs(mod(float(i)*7.0*tx*ty,255.0)/255.0);"
    },
    {
        "name": "gamma12",
        "value": "r = 1.0-abs(log(float(i)*PI/255.0));g = 1.0-abs(log(float(i)*PI/255.0*2.0)); b = 1.0-abs(log(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gamma12.5",
        "value": "r = 1.0-abs(log(float(i)*12.0/255.0));g = 1.0-abs(log(float(i)*6.0/255.0)); b = 1.0-abs(log(float(i)*4.0/255.0));"
    },
    {
        "name": "gamma12.6",
        "value": "r = log(float(i)/4.0)/abs((exp(float(i*18)/255.0))); g = log(float(i)/8.0)/abs((exp(float(i*12)/255.0))); b = log(float(i)/12.0)/abs((exp(float(i*6)/255.0)));"
    },
    {
        "name": "gamma12.7",
        "value": "float j = float(i+1);r = log(j/8.0)/abs((j*2.0/300.0)*log(j*j*j+2.0)); g = log(j/6.5)/abs((j*3.0/300.0)*log(j*j*j+2.0)); b = log(j/9.5)/abs((j*2.0/300.0)*log(j*j*j+2.0));"
    },
    {
        "name": "gammaLite",
        "value": "r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gammaLite_2",
        "value": "r = 1.0-abs(log(float(i)*PI/255.0*tx));g = 1.0-abs(log(float(i)*PI/255.0*2.0*ty)); b = 1.0-abs(log(float(i)*PI/255.0*3.0*tx*ty));"
    },
    {
        "name": "gammaLite_3",
        "value": "r = 1.0-3.0/abs(log(float(i)/255.0*tx)); g = 1.0-3.0/abs(log(float(i)/255.0*ty)); b = 1.0-3.0/abs(log(float(i)/255.0*tx*ty));"
    },
    {
        "name": "gamma14",
        "value": "float r = 2.0*(tx-ty)*(tx-ty)+ty*ty+tx*tx; r = abs((float(i)/255.0))+mod(r+float(i)+r,sin(r)); g = abs((float(i)/255.0*2.0))+mod(float(i),sin(r));          b = abs((float(i)/255.0*3.0))+mod(r*float(i),sin(r));"
    },
    {
        "name": "gamma15",
        "value": "float r = mod(float(i),3.0)*85.0*sin(tx+ty)/255.0;float r1 = mod(float(i)/3.0,3.0)*85.0*sin(tx+ty)/255.0;float r2 = mod(float(i)/9.0,3.0)*85.0*sin(tx+ty)/255.0;r = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i)))),4.0)*64.0/255.0+r);g = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i))))/4.0,4.0)*64.0/255.0+r1);b = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i))))/16.0,4.0)*64.0/255.0+r2);"
    },
    {
        "name": "gamma16",
        "value": "if (float(i)<257.0) {r = 0.7*1.0/abs(log(abs(sin(float(5*i)/155.0))));g = 0.7*1.0/abs(log(abs(sin(float(2*i)/155.0))));b = 0.7*(1.0-1.0/abs(log(abs(sin(float(i*i)/155.0)))));} else{b = 1.0-fract(abs(log(float(i)/255.0)));r = 1.0-fract(abs(log(float(i)/255.0/3.0)));g = 1.0-fract(abs(log(float(i)/255.0/9.0)));};"
    },
    {
        "name": "gamma17",
        "value": "if (float(i)<50.0){r = 1.0-abs(log(float(i)/255.0+2.0));g = 1.0-abs(log(float(i)/255.0)+2.5);b = 1.0-abs(log(float(i)/255.0)+2.7);}else if (float(i)<200.0){r = abs(log(float(i)/255.0*1.3));g = abs(log(float(i)/255.0*2.0));b = abs(log(float(i)*3.0/255.0));}else {r = 1.0-abs(log(float(i)*1.3/255.0));g = 1.0-abs(log(float(i)*2.0/255.0));b = 1.0-abs(log(float(i)*2.7/255.0));};"
    },
    {
        "name": "gamma18",
        "value": "if (float(i)<50.0){r = abs(log(float(i)/255.0+2.0));g = abs(log(float(i)/255.0)+2.5);b = abs(log(float(i)/255.0)+2.7);}else if (float(i)<200.0){r = 1.0-abs(log(float(i)/255.0*1.3));g = 1.0-abs(log(float(i)/255.0*2.0));b = 1.0-abs(log(float(i)*3.0/255.0));}else {r = abs(log(float(i)*1.3/255.0));g = abs(log(float(i)*2.0/255.0));b = abs(log(float(i)*2.7/255.0));};"
    },
    {
        "name": "gamma19",
        "value": "if (float(i)<25.0){r = sin(abs(log(float(i*i)/255.0+2.0)));g = cos(abs(log(float(i*i)/255.0)+2.5));b = sin(abs(log(float(i*i)/255.0)+2.7));}else {r = 1.0-sin(abs(log(float(i)/255.0*1.3)));g = 1.0-sin(abs(log(float(i)/255.0*2.0)));b = 1.0-sin(abs(log(float(i)*3.0/255.0)));}"
    },
    {
        "name": "gamma20",
        "value": "float t = float(i); if (t<5.0){r = 0.6-sin(abs(log(abs(sin(t))*1.3)));g = 0.6-sin(abs(log(abs(sin(t))*2.0)));b = 0.6-sin(abs(log(abs(sin(t))*3.0)));}else {r = 1.0-sin(abs(log(t/255.0*1.3)));g = 1.0-sin(abs(log(t/255.0*2.0)));b = 1.0-sin(abs(log(t*3.0/255.0)));}"
    },
    {
        "name": "gamma_3d",
        "value": "float p = x*x+y*y+z*z; r = 1.0-abs(x)/p;g = 1.0-abs(y)/p;b = 1.0-abs(z)/p;"
    },
    {
        "name": "gamma_3d_2",
        "value": "float p = tx*tx+ty*ty+z*z; r = 1.0-abs(x)/p;g = 1.0-abs(y)/p;b = 1.0-abs(z)/p;"
    },
    {
        "name": "gamma_3d_log",
        "value": "float p = x*x+y*y+z*z; r = 1.0/abs(log(abs(x)/p));g = 1.0/abs(log(abs(y)/p));b = 1.0/abs(log(abs(z)/p));"
    },
    {
        "name": "gamma_3d_log_2",
        "value": "float p = x*x+y*y+z*z; r = 1.0/abs(log(abs(tx)/p));g = 1.0/abs(log(abs(ty)/p));b = 1.0/abs(log(abs(z)/p));"
    },
    {
        "name": "gamma_rnd",
        "value": "float rnd = 1.0 - float(i*i) / 10737.0; if(rnd < 0.5) {r = 1.0/1.50*rnd; g = 1.0/1.5;b = 1.0/1.5;} else if(rnd > 0.5 && rnd<0.75) {r = 1.0/2.0; g = 1.0/2.0*rnd;b = 1.0/2.0;}else if(rnd>0.75) {r = 1.0/4.0;g = 1.0/4.0; b = 1.0/4.0*rnd;}"
    },
    {
        "name": "gradBlueMoveRingWave",
        "value": `float tr = abs(20.0*fract((0.04*uTime*float(0.2*uTime)/(0.2*uTime+1.0))-10.0-(tx*tx+ty*ty)));
                    if (tr < 0.6) {r = (float(i))/15.0*(1.0-1.7*tr); g = (float(i))/30.0*(1.0-1.7*tr); b = (float(i))/10.0*(1.0-1.7*tr);}
                    else if (float(i) > 180.0){r = 0.95; g = 0.82; b = 0.3;}
                    else {r = (float(i))/110.0; g = (float(i))/110.0; b = (float(i))/30.0;}`
    },
    {
        "name": "gradBlueMoveRingWave2",
        "value": `float tr = abs(30.0*fract((0.02*speedColorStyle*uTime*uTime)/(0.1*uTime+1.0))-15.0-((tx+0.5)*(tx+0.5)+(ty+0.5)*(ty+0.5)));
                     float s = abs(30.0*fract((0.02*speedColorStyle*uTime*uTime)/(0.1*uTime+1.0))-15.0-((tx-0.7)*(tx-0.7)+(ty-0.7)*(ty-0.7)));
                    if (s < 0.9 && tr > 0.9 ) {r = (float(i))/10.0*(1.0-s); g = (float(i))/20.0*(1.0-s); b = (float(i))/50.0*(1.0-s);}
                    else if (tr < 0.9 && s > 0.9) {r = (float(i))/15.0*(1.0-tr); g = (float(i))/30.0*(1.0-tr); b = (float(i))/10.0*(1.0-tr);}
                    else if (tr < 0.9 && s < 0.9) {r = (float(i))/((15.0*(1.0-tr)+10.0*(1.0-s))/(2.3-tr-s));
                    g = (float(i))/((30.0*(1.0-tr)+20.0*(1.0-s))/(2.3-tr-s));
                    b = (float(i))/((10.0*(1.0-tr)+50.0*(1.0-s))/(2.3-tr-s));}
                    else if (float(i) > 180.0){r = sin(tx)*0.95; g = cos(tx)*0.82; b = sin(tx*ty*2.0)*0.3;}
                    else {r = (cos(tx)*float(i))/110.0; g = (sin(tx)*float(i))/110.0; b = (sin(tx*2.0)*float(i))/30.0;}`
    },
];

export const norms = [
    {
        "type": "complex",
        "name": "Evklid",
        "value": "(x*x+y*y)>100.0"
    },
    {
        "type": "complex",
        "name": "QEvklid",
        "value": "(x*x*y*y)>100.0"
    },
    {
        "type": "complex",
        "name": "EvklidM",
        "value": "(x*x-3.0)*abs(x*x/y/y)>100.0"
    },
    {
        "type": "complex",
        "name": "EvklidNoise",
        "value": "sin(2.0*log(x*y))*(x*x+y*y)>100.0"
    },
    {
        "type": "complex",
        "name": "EvklidMove",
        "value": "(x*x+y*y)-fract(tx*ty+sin(0.5*speedNorm*(uTime)))*abs(x*x*y*y)*sin(tx*ty)>100.0"
    },
    {
        "type": "complex",
        "name": "absX",
        "value": "abs(x)>100.0"
    },
    {
        "type": "complex",
        "name": "fract",
        "value": "(x * x * fract(tx) * fract(tx) * cos(x) * y * y * fract(ty) * fract(ty) * cos(y)) >100.0"
    },
    {
        "type": "complex",
        "name": "kub",
        "value": "(tx*tx*tx/x+ty*ty*ty/y)> 100.0"
    },
    {
        "type": "complex",
        "name": "kub2",
        "value": "(tx*tx*tx/x+ty*ty*ty/y)> 100.0"
    },
    {
        "type": "ifs",
        "name": "triangl",
        "value": "x>0.&&y>0.&&x+y<1.0"
    },
    {
        "type": "ifs",
        "name": "kvadra",
        "value": "x>0.&&y>0.&&x<1.0&&y<1.0"
    },
    {
        "type": "ifs",
        "name": "krug < 1",
        "value": "x*x+y*y<1.0"
    },
    {
        "type": "ifs",
        "name": "krug < 10",
        "value": "x*x+y*y<10.0"
    },
    {
        "type": "ifs",
        "name": "krug < 100",
        "value": "x*x+y*y<100.0"
    },
    {
        "type": "ifs3d",
        "name": "тетраэдр",
        "value": "x>0.&&y>0.&&z>0.&&x+y+z<1.0"
    },
    {
        "type": "ifs3d",
        "name": "куб",
        "value": "x>0.&&y>0.&&z>0.&&x<1.&&y<1.&&z<1."
    },
    {
        "type": "ifs3d",
        "name": "шар",
        "value": "x*x+y*y+z*z<2.0"
    },
]

export const cards = [
    {
        name: 'Ленты',
        src: 'img/fractals/fractal_screenshot_00044.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:0.38,%22yCenter%22:0.442,%22scaleRange%22:0.003,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(prevX-x)%3C0.001%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:103701,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0,%22yCenter%22:0.06,%22scaleRange%22:5.94},{%22xCenter%22:0.9,%22yCenter%22:-0.24,%22scaleRange%22:18.9},{%22xCenter%22:1.051,%22yCenter%22:-1.128,%22scaleRange%22:10.168},{%22xCenter%22:-20000,%22yCenter%22:-10000,%22scaleRange%22:2650000},{%22xCenter%22:9150,%22yCenter%22:5900,%22scaleRange%22:683700},{%22xCenter%22:945.6,%22yCenter%22:-937,%22scaleRange%22:191436},{%22xCenter%22:-1160.196,%22yCenter%22:977.36,%22scaleRange%22:82891.788},{%22xCenter%22:-165.495,%22yCenter%22:65.55,%22scaleRange%22:50066.64},{%22xCenter%22:-365.762,%22yCenter%22:666.35,%22scaleRange%22:9262.328},{%22xCenter%22:-69.368,%22yCenter%22:129.135,%22scaleRange%22:2936.158},{%22xCenter%22:-7.709,%22yCenter%22:-8.864,%22scaleRange%22:331.786},{%22xCenter%22:-2.732,%22yCenter%22:-2.228,%22scaleRange%22:115.462},{%22xCenter%22:-0.577,%22yCenter%22:1.501,%22scaleRange%22:18.589},{%22xCenter%22:0.371,%22yCenter%22:0.348,%22scaleRange%22:8.7},{%22xCenter%22:-0.3,%22yCenter%22:1.3,%22scaleRange%22:25.5},{%22xCenter%22:-0.121,%22yCenter%22:0.204,%22scaleRange%22:4.973},{%22xCenter%22:0.179,%22yCenter%22:0.404,%22scaleRange%22:16.2},{%22xCenter%22:-0.339,%22yCenter%22:0.177,%22scaleRange%22:7.873},{%22xCenter%22:-0.142,%22yCenter%22:0.193,%22scaleRange%22:2.204},{%22xCenter%22:0.438,%22yCenter%22:0.358,%22scaleRange%22:0.267},{%22xCenter%22:0.392,%22yCenter%22:0.436,%22scaleRange%22:0.038},{%22xCenter%22:0.38,%22yCenter%22:0.442,%22scaleRange%22:0.01},{%22xCenter%22:0.38,%22yCenter%22:0.442,%22scaleRange%22:0.006},{%22xCenter%22:0.38,%22yCenter%22:0.442,%22scaleRange%22:0.003}]}'
    },
    {
        name: 'Сетка на мосте',
        src: 'img/fractals/fractal_screenshot_00011-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0)+tx;%20newY=exp(3.0*x)*sin(3.0*y+1.0)+ty;%22,%22xCenter%22:-0.551,%22yCenter%22:-0.498,%22scaleRange%22:0.114,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.554,%22yCenter%22:-0.516,%22scaleRange%22:0.612},{%22xCenter%22:-0.551,%22yCenter%22:-0.498,%22scaleRange%22:0.114}]}',
    },
    {
        name: 'Трубка',
        src: 'img/fractals/fractal_screenshot_00031-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x/(x*x+y*y)+tx;%20newY=-y/(x*x+y*y)+ty;%22,%22xCenter%22:0.019,%22yCenter%22:1.755,%22scaleRange%22:0.296,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:77171,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:-1.548,%22yCenter%22:1.184,%22scaleRange%22:87},{%22xCenter%22:0.018,%22yCenter%22:1.793,%22scaleRange%22:11.397},{%22xCenter%22:0.086,%22yCenter%22:1.747,%22scaleRange%22:3.909},{%22xCenter%22:0.004,%22yCenter%22:1.52,%22scaleRange%22:0.923},{%22xCenter%22:0.019,%22yCenter%22:1.755,%22scaleRange%22:0.296}]}',
    },
    {
        name: 'Сетка',
        src: 'img/fractals/fractal_screenshot_00033-min.png',
        link:'http://localhost:3000/painting/complex#%7B%22typeFractal%22:%22complex%22,%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:0.27,%22yCenter%22:0.882,%22scaleRange%22:0.109,%22depthIter%22:256,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20abs(sin(float(i)*PI/255.0+tx+ty));g%20=%20abs(sin(float(i)*PI/255.0*2.0+tx+ty));b%20=%20abs(sin(float(i)*PI/255.0*3.0+tx+ty));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:1,%22history%22:%5B%7B%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6%7D,%7B%22xCenter%22:0.28,%22yCenter%22:0.96,%22scaleRange%22:0.33%7D,%7B%22xCenter%22:0.259,%22yCenter%22:0.951,%22scaleRange%22:0.113%7D,%7B%22xCenter%22:0.27,%22yCenter%22:0.882,%22scaleRange%22:0.109%7D%5D%7D'
    },
    {
        name: 'Пена на воде',
        src: 'img/fractals/fractal_screenshot_00029-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+tx;newY=%20y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+ty;%22,%22xCenter%22:0.12,%22yCenter%22:0.04,%22scaleRange%22:4.52,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x+y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:72531,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:7.68},{%22xCenter%22:0.12,%22yCenter%22:0.04,%22scaleRange%22:4.52}]}',
    },
    {
        name: 'Мандельброт',
        src: 'img/fractals/fractal_screenshot_00032-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:4,%22scaleXtoY%22:1.9516994633273703,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(x)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:1,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-1.292,%22yCenter%22:-0.06,%22scaleRange%22:1.698}]}',
    },
    {
        name: 'Втроем',
        src: 'img/fractals/fractal_screenshot_00042-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=2.*x*y+tx;%20newY=(x*x-y*y)+ty;%22,%22xCenter%22:0,%22yCenter%22:0.5,%22scaleRange%22:6,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x-3.0)*abs(x*x/y/y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:78526,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0,%22yCenter%22:0.06,%22scaleRange%22:5.94},{%22xCenter%22:0.9,%22yCenter%22:-0.24,%22scaleRange%22:18.9},{%22xCenter%22:1.051,%22yCenter%22:-1.128,%22scaleRange%22:10.168},{%22xCenter%22:-20000,%22yCenter%22:-10000,%22scaleRange%22:2650000},{%22xCenter%22:9150,%22yCenter%22:5900,%22scaleRange%22:683700},{%22xCenter%22:945.6,%22yCenter%22:-937,%22scaleRange%22:191436},{%22xCenter%22:-1160.196,%22yCenter%22:977.36,%22scaleRange%22:82891.788},{%22xCenter%22:-165.495,%22yCenter%22:65.55,%22scaleRange%22:50066.64},{%22xCenter%22:-365.762,%22yCenter%22:666.35,%22scaleRange%22:9262.328},{%22xCenter%22:-69.368,%22yCenter%22:129.135,%22scaleRange%22:2936.158},{%22xCenter%22:-7.709,%22yCenter%22:-8.864,%22scaleRange%22:331.786},{%22xCenter%22:-2.732,%22yCenter%22:-2.228,%22scaleRange%22:115.462},{%22xCenter%22:-0.577,%22yCenter%22:1.501,%22scaleRange%22:18.589},{%22xCenter%22:0.371,%22yCenter%22:0.348,%22scaleRange%22:8.7},{%22xCenter%22:-0.3,%22yCenter%22:1.3,%22scaleRange%22:25.5},{%22xCenter%22:-0.121,%22yCenter%22:0.204,%22scaleRange%22:4.973},{%22xCenter%22:0.179,%22yCenter%22:0.404,%22scaleRange%22:16.2},{%22xCenter%22:0.017,%22yCenter%22:-0.017,%22scaleRange%22:1.976},{%22xCenter%22:0.117,%22yCenter%22:0.583,%22scaleRange%22:10.9},{%22xCenter%22:-0.283,%22yCenter%22:-0.517,%22scaleRange%22:9},{%22xCenter%22:0.041,%22yCenter%22:0.518,%22scaleRange%22:4.419}]}',
    },
    {
        name: 'Капля',
        src: 'img/fractals/fractal_screenshot_00039-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=(x*x-y*y)/(tx*tx+ty*ty)+tx;%20newY=2.0*x*y/(tx*tx+ty*ty)+ty;%22,%22xCenter%22:0,%22yCenter%22:0,%22scaleRange%22:10,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(x)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*12.0/255.0));g%20=%201.0-abs(log(float(i)*6.0/255.0));%20b%20=%201.0-abs(log(float(i)*4.0/255.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:66844,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6}]}',
    },
    {
        name: 'Крышка',
        src: 'img/fractals/fractal_screenshot_00002-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x/(tx*tx+ty*ty)+tx*tx;%20newY=y/(tx*tx+ty*ty)+ty*ty;%22,%22xCenter%22:0.214,%22yCenter%22:-0.2,%22scaleRange%22:5.22,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*12.0/255.0));g%20=%201.0-abs(log(float(i)*6.0/255.0));%20b%20=%201.0-abs(log(float(i)*4.0/255.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:5439,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:4.3,%22yCenter%22:-3,%22scaleRange%22:88.8},{%22xCenter%22:0.393,%22yCenter%22:-0.247,%22scaleRange%22:17.316},{%22xCenter%22:-0.386,%22yCenter%22:-0.68,%22scaleRange%22:3.377},{%22xCenter%22:0.214,%22yCenter%22:-0.2,%22scaleRange%22:5.22}]}',
    },
    {
        name: 'Ожерелье',
        src: 'img/fractals/fractal_42.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+tx;newY=%20y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+ty;%22,%22xCenter%22:0.008,%22yCenter%22:0.017,%22scaleRange%22:4,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(prevX-x)%3C0.001&&abs(prevY-y)%3C0.001%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:72531,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:7.68},{%22xCenter%22:0.008,%22yCenter%22:0.017,%22scaleRange%22:3.072}]}'
    },
//    {
//        name: 'Спираль',
//        src: 'img/fractals/fractal_screenshot_00045.png',
//        link:'http://localhost:3000/painting/complex#%7B%22typeFractal%22:%22complex%22,%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:0.278,%22yCenter%22:0.874,%22scaleRange%22:0.007,%22depthIter%22:256,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(prevY-y)%3C0.001%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20abs(sin(float(i)*PI/255.0));g%20=%20abs(sin(float(i)*PI/255.0*2.0));b%20=%20abs(sin(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:103701,%22history%22:%5B%7B%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6%7D,%7B%22xCenter%22:0,%22yCenter%22:0.06,%22scaleRange%22:5.94%7D,%7B%22xCenter%22:0.9,%22yCenter%22:-0.24,%22scaleRange%22:18.9%7D,%7B%22xCenter%22:1.051,%22yCenter%22:-1.128,%22scaleRange%22:10.168%7D,%7B%22xCenter%22:-20000,%22yCenter%22:-10000,%22scaleRange%22:2650000%7D,%7B%22xCenter%22:9150,%22yCenter%22:5900,%22scaleRange%22:683700%7D,%7B%22xCenter%22:945.6,%22yCenter%22:-937,%22scaleRange%22:191436%7D,%7B%22xCenter%22:-1160.196,%22yCenter%22:977.36,%22scaleRange%22:82891.788%7D,%7B%22xCenter%22:-165.495,%22yCenter%22:65.55,%22scaleRange%22:50066.64%7D,%7B%22xCenter%22:-365.762,%22yCenter%22:666.35,%22scaleRange%22:9262.328%7D,%7B%22xCenter%22:-69.368,%22yCenter%22:129.135,%22scaleRange%22:2936.158%7D,%7B%22xCenter%22:-7.709,%22yCenter%22:-8.864,%22scaleRange%22:331.786%7D,%7B%22xCenter%22:-2.732,%22yCenter%22:-2.228,%22scaleRange%22:115.462%7D,%7B%22xCenter%22:-0.577,%22yCenter%22:1.501,%22scaleRange%22:18.589%7D,%7B%22xCenter%22:0.371,%22yCenter%22:0.348,%22scaleRange%22:8.7%7D,%7B%22xCenter%22:0.101,%22yCenter%22:0.539,%22scaleRange%22:0.922%7D,%7B%22xCenter%22:0.26,%22yCenter%22:0.84,%22scaleRange%22:0.101%7D,%7B%22xCenter%22:0.273,%22yCenter%22:0.872,%22scaleRange%22:0.021%7D,%7B%22xCenter%22:0.278,%22yCenter%22:0.874,%22scaleRange%22:0.007%7D%5D%7D'
//    },
    {
        name: 'Драконий цветок',
        src: 'img/fractals/fractal_screenshot_00046.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:0.307,%22yCenter%22:-0.048,%22scaleRange%22:0.01,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x*prevX+y*prevY%3E100.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=prevX/x;g=prevY/y;%20b=float(i)/x/y;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:103701,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.388,%22yCenter%22:-0.222,%22scaleRange%22:0.63},{%22xCenter%22:0.314,%22yCenter%22:-0.044,%22scaleRange%22:0.046},{%22xCenter%22:0.307,%22yCenter%22:-0.048,%22scaleRange%22:0.01}]}'
    },
    {
        name: 'Мандельброт',
        src: 'img/fractals/fractal_screenshot_00047.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x*x-y*y+tx;newY=2.0*x*y+ty;%22,%22xCenter%22:-0.379,%22yCenter%22:0.007,%22scaleRange%22:8.86,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x+y*y)*tan(float(i))%3E10.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(prevX/x);g=abs(prevY/y);%20b=abs(prevX/y);%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:106341,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.62,%22yCenter%22:0.12,%22scaleRange%22:16.08},{%22xCenter%22:-0.379,%22yCenter%22:0.007,%22scaleRange%22:8.86}]}'
    },
    {
        name: 'Энерго-установка (А)',
        src: 'img/fractals/fractal_screenshot_00040-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=tan(x*x-y*y)/(tx*tx+ty*ty)+cos(uTime);%20newY=tan(2.0*x*y)/(tx*tx+ty*ty)+sin(uTime);%22,%22xCenter%22:0,%22yCenter%22:0,%22scaleRange%22:10,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(x)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:74516,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0,%22yCenter%22:0.06,%22scaleRange%22:5.94},{%22xCenter%22:0.9,%22yCenter%22:-0.24,%22scaleRange%22:18.9},{%22xCenter%22:1.051,%22yCenter%22:-1.128,%22scaleRange%22:10.168},{%22xCenter%22:-20000,%22yCenter%22:-10000,%22scaleRange%22:2650000},{%22xCenter%22:9150,%22yCenter%22:5900,%22scaleRange%22:683700},{%22xCenter%22:945.6,%22yCenter%22:-937,%22scaleRange%22:191436},{%22xCenter%22:-1160.196,%22yCenter%22:977.36,%22scaleRange%22:82891.788},{%22xCenter%22:-165.495,%22yCenter%22:65.55,%22scaleRange%22:50066.64},{%22xCenter%22:-365.762,%22yCenter%22:666.35,%22scaleRange%22:9262.328},{%22xCenter%22:-69.368,%22yCenter%22:129.135,%22scaleRange%22:2936.158},{%22xCenter%22:-7.709,%22yCenter%22:-8.864,%22scaleRange%22:331.786},{%22xCenter%22:-2.732,%22yCenter%22:-2.228,%22scaleRange%22:115.462},{%22xCenter%22:-0.577,%22yCenter%22:1.501,%22scaleRange%22:18.589},{%22xCenter%22:0.371,%22yCenter%22:0.348,%22scaleRange%22:8.7}]}',
    },
    {
        name: 'Энерго-установка - плазмоид (А)',
        src: 'img/fractals/fractal_screenshot_00041-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=tan(x*x-y*y)/(tx*tx+ty*ty)+cos(uTime);%20newY=(2.*x*y)/(tx*tx+ty*ty)+sin(uTime);%22,%22xCenter%22:0.017,%22yCenter%22:-0.017,%22scaleRange%22:10,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(x)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:77685,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0,%22yCenter%22:0.06,%22scaleRange%22:5.94},{%22xCenter%22:0.9,%22yCenter%22:-0.24,%22scaleRange%22:18.9},{%22xCenter%22:1.051,%22yCenter%22:-1.128,%22scaleRange%22:10.168},{%22xCenter%22:-20000,%22yCenter%22:-10000,%22scaleRange%22:2650000},{%22xCenter%22:9150,%22yCenter%22:5900,%22scaleRange%22:683700},{%22xCenter%22:945.6,%22yCenter%22:-937,%22scaleRange%22:191436},{%22xCenter%22:-1160.196,%22yCenter%22:977.36,%22scaleRange%22:82891.788},{%22xCenter%22:-165.495,%22yCenter%22:65.55,%22scaleRange%22:50066.64},{%22xCenter%22:-365.762,%22yCenter%22:666.35,%22scaleRange%22:9262.328},{%22xCenter%22:-69.368,%22yCenter%22:129.135,%22scaleRange%22:2936.158},{%22xCenter%22:-7.709,%22yCenter%22:-8.864,%22scaleRange%22:331.786},{%22xCenter%22:-2.732,%22yCenter%22:-2.228,%22scaleRange%22:115.462},{%22xCenter%22:-0.577,%22yCenter%22:1.501,%22scaleRange%22:18.589},{%22xCenter%22:0.371,%22yCenter%22:0.348,%22scaleRange%22:8.7},{%22xCenter%22:-0.3,%22yCenter%22:1.3,%22scaleRange%22:25.5},{%22xCenter%22:-0.121,%22yCenter%22:0.204,%22scaleRange%22:4.973},{%22xCenter%22:0.179,%22yCenter%22:0.404,%22scaleRange%22:16.2},{%22xCenter%22:0.017,%22yCenter%22:-0.017,%22scaleRange%22:1.976}]}',
    },
//    {
//        name: 'Треки',
//        src: 'img/fractals/fractal_screenshot_00000-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=tan(x*y)+tx;%20newY=x*y+ty;%22,%22xCenter%22:0.111,%22yCenter%22:-2.916,%22scaleRange%22:1,%22scaleXtoY%22:1.9516994633273703,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:5439,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.8,%22yCenter%22:-9.36,%22scaleRange%22:11.28},{%22xCenter%22:-1.341,%22yCenter%22:-8.04,%22scaleRange%22:1.015},{%22xCenter%22:-1.33,%22yCenter%22:-8.076,%22scaleRange%22:0.329},{%22xCenter%22:-1.205,%22yCenter%22:-7.995,%22scaleRange%22:0.053},{%22xCenter%22:-1.204,%22yCenter%22:-7.992,%22scaleRange%22:0.014},{%22xCenter%22:-0.604,%22yCenter%22:0.508,%22scaleRange%22:29},{%22xCenter%22:0.527,%22yCenter%22:-3.9,%22scaleRange%22:2.349},{%22xCenter%22:0.111,%22yCenter%22:-2.916,%22scaleRange%22:0.155}]}',
//    },
    {
        name: 'Паркет-1 (А)',
        src: 'img/fractals/fractal_screenshot_00049.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=1.0/tan(x*x-y*y)*(x*x+y*y)+cos(uTime);%20newY=1./tan(2.0*x*y)*(x*x+y*y)+sin(uTime);%22,%22xCenter%22:0.34,%22yCenter%22:-0.06,%22scaleRange%22:10.5,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(sin(mod(float(i),3.0)*127.0));g%20=%201.0-abs(sin(mod(float(i)/3.0,3.0)*127.0));b%20=%201.0-abs(sin(mod(float(i)/9.0,3.0)*127.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:67469,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.34,%22yCenter%22:-0.06,%22scaleRange%22:10.5}]}'
    },
    {
        name: 'Паркет-2 (А)',
        src: 'img/fractals/fractal_screenshot_00050.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=1.0/tan(x*x-y*y)*(x*x+y*y)+cos(uTime);%20newY=1./tan(2.0*x*y)*(x*x+y*y)+sin(uTime);%22,%22xCenter%22:1.663,%22yCenter%22:2.922,%22scaleRange%22:1.596,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20abs(mod(float(i*i*i)*13.0*tx*ty,255.0)/255.0);%20g%20=%20abs(mod(float(i*i)*11.0*tx*ty,255.0)/255.0);%20b%20=%20abs(mod(float(i)*7.0*tx*ty,255.0)/255.0);%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:67469,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.34,%22yCenter%22:-0.06,%22scaleRange%22:10.5},{%22xCenter%22:1.663,%22yCenter%22:2.922,%22scaleRange%22:1.596}]}'
    },
    {
        name: 'Астроид',
        src: 'img/fractals/fractal_screenshot_00037-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=1.0/atan(x*x-y*y);tmp=newX;;%20newY=1.0/atan(2.0*x*y);newX=tmp*tmp-newY*newY;newY=newY*2.0*tmp;;%22,%22xCenter%22:89.801,%22yCenter%22:988.056,%22scaleRange%22:66657.276,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x%20*%20x%20*%20fract(tx)%20*%20fract(tx)%20*%20cos(x)%20*%20y%20*%20y%20*%20fract(ty)%20*%20fract(ty)%20*%20cos(y))%20%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:66704,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-600000.5,%22yCenter%22:-3000000,%22scaleRange%22:112800000},{%22xCenter%22:-261600.5,%22yCenter%22:-1195200,%22scaleRange%22:20078400},{%22xCenter%22:-743482.1,%22yCenter%22:-231436.8,%22scaleRange%22:4457404.8},{%22xCenter%22:-377974.906,%22yCenter%22:-213607.181,%22scaleRange%22:1595750.918},{%22xCenter%22:-15739.448,%22yCenter%22:-17329.818,%22scaleRange%22:269681.905},{%22xCenter%22:-906.943,%22yCenter%22:738.87,%22scaleRange%22:124593.04},{%22xCenter%22:89.801,%22yCenter%22:988.056,%22scaleRange%22:66657.276}]} ',
    },
    {
        name: 'Кактусы (А)',
        src: 'img/fractals/fractal_screenshot_00028-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=abs(sin(1.0-x)*(exp(y)+exp(-y))/2.0)+cos(0.2*uTime);%20newY=abs(cos(1.0-x)*(exp(y)-exp(-y))/2.0)+sin(0.2*uTime);%22,%22xCenter%22:9.025,%22yCenter%22:0.303,%22scaleRange%22:14,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20tx*tx+ty*ty+z*z;%20r%20=%201.0-abs(x)/p;g%20=%201.0-abs(y)/p;b%20=%201.0-abs(z)/p;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:72217,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:7.68},{%22xCenter%22:0.473,%22yCenter%22:0.981,%22scaleRange%22:14},{%22xCenter%22:0.865,%22yCenter%22:3.543,%22scaleRange%22:4.746},{%22xCenter%22:9.025,%22yCenter%22:0.303,%22scaleRange%22:14}]}',
    },
    {
        name: 'Яйцо',
        src: 'img/fractals/fractal_screenshot_00025-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(1.0-x)*(exp(y)+exp(-y))/2.0+tx;%20newY=cos(1.0-x)*(exp(y)-exp(-y))/2.0+ty;%22,%22xCenter%22:-13.277,%22yCenter%22:5.252,%22scaleRange%22:7.561,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x+y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20x*x+y*y+z*z;%20r%20=%201.0/abs(log(abs(tx)/p));g%20=%201.0/abs(log(abs(ty)/p));b%20=%201.0/abs(log(abs(z)/p));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:60500,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:-13.277,%22yCenter%22:5.252,%22scaleRange%22:7.561}]}',
    },
    {
        name: 'Жулиа (А)',
        src: 'img/fractals/fractal_screenshot_00004-min.png',
        link: 'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(x)*x-y*y+cos(0.3*uTime);%20newY=2.0*x*y+cos(0.3*uTime);%22,%22xCenter%22:0.532,%22yCenter%22:0.263,%22scaleRange%22:8.405,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:16779,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.7,%22yCenter%22:4.8,%22scaleRange%22:87.6},{%22xCenter%22:2.364,%22yCenter%22:-1.332,%22scaleRange%22:21.55},{%22xCenter%22:2.364,%22yCenter%22:-1.332,%22scaleRange%22:21.55},{%22xCenter%22:0.532,%22yCenter%22:0.263,%22scaleRange%22:8.405}]}',
    },
    {
        name: 'Фату (А)',
        src: 'img/fractals/fractal_screenshot_00005-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=3.0*x*x-3.0*y*y+3.0*x*x*y-y*y*y+sin(0.1*uTime)/(sin(0.1*uTime)+3.0);%20newY=6.0*x*y-x*x*x+3.0*x*y*y+sin(0.1*uTime)/(cos(0.1*uTime)+3.0);%22,%22xCenter%22:0.184,%22yCenter%22:-0.186,%22scaleRange%22:2.016,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:14807,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.13,%22yCenter%22:-0.186,%22scaleRange%22:1.164},{%22xCenter%22:0.184,%22yCenter%22:-0.186,%22scaleRange%22:2.016}]}',
    },
    {
        name: 'Вихри (А)',
        src: 'img/fractals/fractal_screenshot_00013-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0);%20newY=exp(3.0*x)*sin(3.0*y+1.0)+sin(0.1*uTime);%22,%22xCenter%22:-0.136,%22yCenter%22:4.815,%22scaleRange%22:4.269,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:28000,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.25,%22yCenter%22:-2.45,%22scaleRange%22:37.45},{%22xCenter%22:-0.136,%22yCenter%22:4.815,%22scaleRange%22:4.269}]}',
    },
    {
        name: 'Клубки',
        src: 'img/fractals/fractal_screenshot_00016-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))+ty;%22,%22xCenter%22:-0.549,%22yCenter%22:-0.5,%22scaleRange%22:0.052,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:56529,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.488,%22yCenter%22:-0.468,%22scaleRange%22:0.702},{%22xCenter%22:-0.552,%22yCenter%22:-0.488,%22scaleRange%22:0.114},{%22xCenter%22:-0.549,%22yCenter%22:-0.5,%22scaleRange%22:0.052}]}',
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00017-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))+ty;%22,%22xCenter%22:-0.549,%22yCenter%22:-0.507,%22scaleRange%22:0.011,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:56529,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.488,%22yCenter%22:-0.468,%22scaleRange%22:0.702},{%22xCenter%22:-0.549,%22yCenter%22:-0.502,%22scaleRange%22:0.12},{%22xCenter%22:-0.55,%22yCenter%22:-0.505,%22scaleRange%22:0.024},{%22xCenter%22:-0.549,%22yCenter%22:-0.507,%22scaleRange%22:0.011}]}',
//    },
    {
        name: 'Спираль-1 (А)',
        src: 'img/fractals/fractal_screenshot_00014-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0)+cos(0.1*uTime);%20newY=exp(3.0*x)*sin(3.0*y+1.0);%22,%22xCenter%22:-0.286,%22yCenter%22:0.828,%22scaleRange%22:0.992,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:49679,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.25,%22yCenter%22:-2.45,%22scaleRange%22:37.45},{%22xCenter%22:19.638,%22yCenter%22:-8.592,%22scaleRange%22:10.673},{%22xCenter%22:-0.662,%22yCenter%22:1.508,%22scaleRange%22:8},{%22xCenter%22:-0.286,%22yCenter%22:0.828,%22scaleRange%22:0.992}]}',
    },
    {
        name: 'Спираль-2',
        src: 'img/fractals/fractal_screenshot_00035-min.png',
        link:'http://localhost:3000/painting/complex#%7B%22typeFractal%22:%22complex%22,%22name%22:%22newX=sin(x)*(exp(y)+exp(-y))/2.+tx;newY=cos(x)*(exp(y)-exp(-y))/2.+ty;%22,%22xCenter%22:8.462,%22yCenter%22:1.768,%22scaleRange%22:0.052,%22depthIter%22:256,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20abs(sin(float(i)*PI/255.0));g%20=%20abs(sin(float(i)*PI/255.0*2.0));b%20=%20abs(sin(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:%5B%7B%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6%7D,%7B%22xCenter%22:-0.554,%22yCenter%22:-0.516,%22scaleRange%22:0.612%7D,%7B%22xCenter%22:-0.551,%22yCenter%22:-0.498,%22scaleRange%22:0.114%7D,%7B%22xCenter%22:-0.549,%22yCenter%22:-0.464,%22scaleRange%22:0.012%7D,%7B%22xCenter%22:-0.549,%22yCenter%22:-0.464,%22scaleRange%22:0.002%7D,%7B%22xCenter%22:0.411,%22yCenter%22:-0.284,%22scaleRange%22:20.76%7D,%7B%22xCenter%22:8.736,%22yCenter%22:2.809,%22scaleRange%22:4.692%7D,%7B%22xCenter%22:9.083,%22yCenter%22:1.345,%22scaleRange%22:0.976%7D,%7B%22xCenter%22:8.889,%22yCenter%22:1.147,%22scaleRange%22:0.173%7D,%7B%22xCenter%22:8.89,%22yCenter%22:1.165,%22scaleRange%22:0.012%7D,%7B%22xCenter%22:8.889,%22yCenter%22:1.165,%22scaleRange%22:0.004%7D,%7B%22xCenter%22:8.679,%22yCenter%22:1.34,%22scaleRange%22:2.35%7D,%7B%22xCenter%22:8.298,%22yCenter%22:1.791,%22scaleRange%22:0.519%7D,%7B%22xCenter%22:8.462,%22yCenter%22:1.768,%22scaleRange%22:0.052%7D%5D%7D'
    },
    {
        name: 'Цветы',
        src: 'img/fractals/fractal_screenshot_00036-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(x)*(exp(y)+exp(-y))/2.+tx;newY=cos(x)*(exp(y)-exp(-y))/2.+ty;%22,%22xCenter%22:8.597,%22yCenter%22:1.602,%22scaleRange%22:0.02,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:1,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:5.68,%22yCenter%22:0.36,%22scaleRange%22:11.64},{%22xCenter%22:9.323,%22yCenter%22:0.325,%22scaleRange%22:5.471},{%22xCenter%22:8.716,%22yCenter%22:1.43,%22scaleRange%22:1.165},{%22xCenter%22:8.612,%22yCenter%22:1.583,%22scaleRange%22:0.325},{%22xCenter%22:8.592,%22yCenter%22:1.621,%22scaleRange%22:0.105},{%22xCenter%22:8.597,%22yCenter%22:1.602,%22scaleRange%22:0.02}]}',
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00018-min.png',
//        link:'http://localhost:3000/painting/complex#%7B%22typeFractal%22:%22complex%22,%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))+ty;%22,%22xCenter%22:-0.413,%22yCenter%22:-2.28,%22scaleRange%22:0.142,%22depthIter%22:256,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:56529,%22history%22:%5B%7B%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6%7D,%7B%22xCenter%22:1.24,%22yCenter%22:1.2,%22scaleRange%22:38.1%7D,%7B%22xCenter%22:0.211,%22yCenter%22:-2.343,%22scaleRange%22:6.972%7D,%7B%22xCenter%22:-0.186,%22yCenter%22:-2.064,%22scaleRange%22:0.948%7D,%7B%22xCenter%22:-0.413,%22yCenter%22:-2.28,%22scaleRange%22:0.142%7D%5D%7D'
//    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00021-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))*cos(0.2*uTime)+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))*sin(0.2*uTime)+ty;%22,%22xCenter%22:0.694,%22yCenter%22:22.5,%22scaleRange%22:1.526,%22scaleXtoY%22:1.588550983899821,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:63256,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.48,%22yCenter%22:22.98,%22scaleRange%22:6.54},{%22xCenter%22:0.78,%22yCenter%22:23.477,%22scaleRange%22:2.001},{%22xCenter%22:0.8,%22yCenter%22:23.591,%22scaleRange%22:0.346},{%22xCenter%22:0.69,%22yCenter%22:23.661,%22scaleRange%22:1.59},{%22xCenter%22:0.19,%22yCenter%22:24.061,%22scaleRange%22:5.3},{%22xCenter%22:0.694,%22yCenter%22:23.584,%22scaleRange%22:1.526}]}',
//    },
    {
        name: '',
        src: 'img/fractals/fractal_screenshot_00026-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(1.0-x)*(exp(y)+exp(-y))/2.0+cos(0.2*uTime);%20newY=cos(1.0-x)*(exp(y)-exp(-y))/2.0+sin(0.2*uTime);%22,%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:8,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x+y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:63656,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:7.68}]}',
    },
    {
        name: 'Дракон (А)',
        src: 'img/fractals/fractal_screenshot_00054.png',
        link:'http://localhost:3000/painting/ifs#{%22typeFractal%22:%22ifs%22,%22name%22:%22if(areaCond((cos(uTime*0.5)*0.864*(x-1.882)-(y-0.111)*0.281)/0.772,%20(0.824*(y-0.111)+(x-1.882)*0.212)/0.772)){newX=(cos(uTime*0.5)*0.864*(x-1.882)-(y-0.111)*0.281)/0.772;%20newY=(0.824*(y-0.111)+(x-1.882)*0.212)/0.772;%20x=newX;%20y=newY;%20continue;}\nif(areaCond((-0.378*(x+0.785)-(y+8.096)*0.521)/0.208,%20(cos(uTime*0.3)*0.088*(x+8.096)+(y+0.785)*0.464)/0.208)){newX=(-0.378*(x+0.785)-(y+8.096)*0.521)/0.208;%20newY=(cos(uTime*0.3)*0.088*(x+8.096)+(y+0.785)*0.464)/0.208;%20x=newX;%20y=newY;%20continue;}\n%22,%22xCenter%22:-2.95,%22yCenter%22:-2.55,%22scaleRange%22:36.35,%22depthIter%22:42,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x*x+y*y%3C120.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:16859,%22history%22:[{%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3},{%22xCenter%22:-2.95,%22yCenter%22:-2.55,%22scaleRange%22:36.35}]}'
    },
    {
        name: 'Кривая Коха',
        src: 'img/fractals/fractal_screenshot_00055.png',
        link:'http://localhost:3000/painting/ifs#{%22typeFractal%22:%22ifs%22,%22name%22:%22if(areaCond(3.*x,%203.*y)){newX=3.*x;%20newY=3.*y;%20x=newX;%20y=newY;%20continue;}\nif(areaCond(3.*x-1200.,%203.*y)){newX=3.*x-1200.;%20newY=3.*y;%20x=newX;%20y=newY;%20continue;}\nif(areaCond(1.5*x+2.61*y-300.,%201.5*y-2.61*x+522.)){newX=1.5*x+2.61*y-300.;%20newY=1.5*y-2.61*x+522.;%20x=newX;%20y=newY;%20continue;}\nif(areaCond(cos(PI/3.)*3.*x-sin(PI/3.)*3.*y,%20sin(PI/3.)*3.*x%20+cos(PI/3.)*3.*y-1040.)){newX=cos(PI/3.)*3.*x-sin(PI/3.)*3.*y;%20newY=sin(PI/3.)*3.*x%20+cos(PI/3.)*3.*y-1040.;%20x=newX;%20y=newY;%20continue;}\n%22,%22xCenter%22:255.271,%22yCenter%22:134.281,%22scaleRange%22:870.951,%22depthIter%22:4,%22scaleXtoY%22:1.8505942275042444,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22y%3E0.&&y%3C200.&&x%3E0.&&x%3C600.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:3253,%22history%22:[{%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3},{%22xCenter%22:330.5,%22yCenter%22:348.5,%22scaleRange%22:870},{%22xCenter%22:250.5,%22yCenter%22:28.5,%22scaleRange%22:2200},{%22xCenter%22:325.3,%22yCenter%22:431.1,%22scaleRange%22:754.6},{%22xCenter%22:3341.3,%22yCenter%22:11741.1,%22scaleRange%22:53534},{%22xCenter%22:343.396,%22yCenter%22:498.96,%22scaleRange%22:5728.138},{%22xCenter%22:291.843,%22yCenter%22:561.97,%22scaleRange%22:1036.793},{%22xCenter%22:193.348,%22yCenter%22:553.676,%22scaleRange%22:211.506},{%22xCenter%22:223.805,%22yCenter%22:551.561,%22scaleRange%22:23.9},{%22xCenter%22:293.805,%22yCenter%22:391.561,%22scaleRange%22:4070},{%22xCenter%22:306.015,%22yCenter%22:363.071,%22scaleRange%22:3170.53},{%22xCenter%22:290.162,%22yCenter%22:416.97,%22scaleRange%22:2685.439},{%22xCenter%22:298.218,%22yCenter%22:433.083,%22scaleRange%22:1342.719},{%22xCenter%22:190.852,%22yCenter%22:178.086,%22scaleRange%22:2576.778},{%22xCenter%22:255.271,%22yCenter%22:134.281,%22scaleRange%22:870.951}]}'
    },
    {
        name: 'Салфетка Серпинского',
        src: 'img/fractals/fractal_screenshot_00056.png',
        link:'http://localhost:3000/painting/ifs#%7B%22typeFractal%22:%22ifs%22,%22name%22:%22if(areaCond(3.*x,3.*y))%7BnewX=3.*x;newY=3.*y;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x-2.,3.*y-2.))%7BnewX=3.*x-2.;newY=3.*y-2.;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x-2.,3.*y))%7BnewX=3.*x-2.;newY=3.*y;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x,3.*y-2.))%7BnewX=3.*x;newY=3.*y-2.;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x-1.,3.*y))%7BnewX=3.*x-1.;newY=3.*y;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x,3.*y-1.))%7BnewX=3.*x;newY=3.*y-1.;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x-2.,3.*y-1.))%7BnewX=3.*x-2.;newY=3.*y-1.;x=newX;y=newY;continue;%7D%5Cnif(areaCond(3.*x-1.,3.*y-2.))%7BnewX=3.*x-1.;newY=3.*y-2.;x=newX;y=newY;continue;%7D%5Cn%22,%22xCenter%22:0.5,%22yCenter%22:1,%22scaleRange%22:3,%22depthIter%22:4,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&x%3C1.0&&y%3C1.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:17893,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D,%7B%22xCenter%22:-2.95,%22yCenter%22:-2.55,%22scaleRange%22:36.35%7D,%7B%22xCenter%22:0.503,%22yCenter%22:0.831,%22scaleRange%22:5.889%7D,%7B%22xCenter%22:0.497,%22yCenter%22:0.949,%22scaleRange%22:1.619%7D%5D%7D'
    },
    {
        name: 'Треугольник Серпинского',
        src: 'img/fractals/fractal_screenshot_00057.png',
        link:'http://localhost:3000/painting/ifs#%7B%22typeFractal%22:%22ifs%22,%22name%22:%22if(areaCond(2.0*x,%202.0*y))%7BnewX=2.0*x;%20newY=2.0*y;%20x=newX;%20y=newY;%20continue;%7Dif(areaCond(2.0*x-1.0,%202.0*y))%7BnewX=2.0*x-1.0;%20newY=2.0*y;%20x=newX;%20y=newY;%20continue;%7Dif(areaCond(2.0*x,%202.0*y-1.0))%7BnewX=2.0*x;%20newY=2.0*y-1.0;%20x=newX;%20y=newY;%20continue;%7D%22,%22xCenter%22:0.5,%22yCenter%22:1,%22scaleRange%22:3,%22depthIter%22:5,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&x+y%3C1.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:17893,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D,%7B%22xCenter%22:-2.95,%22yCenter%22:-2.55,%22scaleRange%22:36.35%7D,%7B%22xCenter%22:0.503,%22yCenter%22:0.831,%22scaleRange%22:5.889%7D,%7B%22xCenter%22:0.497,%22yCenter%22:0.949,%22scaleRange%22:1.619%7D%5D%7D'
    },
    {
        name: 'Тетраэдр Серпинского (А)',
        src: 'img/fractals/fractal_screenshot_00058.png',
        link:'http://localhost:3000/painting/ifs3d#%7B%22typeFractal%22:%22ifs3d%22,%22name%22:%22if(areaCond(2.0*x,%202.0*y,%202.0*z))%7BnewX=2.0*x;%20newY=2.0*y;%20newZ=2.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cnif(areaCond(2.0*x-1.0,%202.0*y,%202.0*z))%7BnewX=2.0*x-1.0;%20newY=2.0*y;%20newZ=2.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cnif(areaCond(2.0*x,%202.0*y-1.0,%202.0*z))%7BnewX=2.0*x;%20newY=2.0*y-1.0;%20newZ=2.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cnif(areaCond(2.0*x,%202.0*y,%202.0*z-1.0))%7BnewX=2.0*x;%20newY=2.0*y;%20newZ=2.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%22,%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3,%22depthIter%22:7,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&z%3E0.&&x%3C1.&&y%3C1.&&z%3C1.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:2315,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D%5D%7D'
    },
    {
        name: 'Губка Менгера (А)',
        src: 'img/fractals/fractal_screenshot_00059.png',
        link:'http://localhost:3000/painting/ifs3d#%7B%22typeFractal%22:%22ifs3d%22,%22name%22:%22if(areaCond(3.0*x,%203.0*y,%203.0*z))%7BnewX=3.0*x;%20newY=3.0*y;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y,%203.0*z))%7BnewX=3.0*x-1.0;%20newY=3.0*y;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y,%203.0*z))%7BnewX=3.0*x-2.0;%20newY=3.0*y;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-1.0,%203.0*z))%7BnewX=3.0*x;%20newY=3.0*y-1.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-2.0,%203.0*z))%7BnewX=3.0*x;%20newY=3.0*y-2.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y,%203.0*z-1.0))%7BnewX=3.0*x;%20newY=3.0*y;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y,%203.0*z-2.0))%7BnewX=3.0*x;%20newY=3.0*y;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-1.0,%203.0*z))%7BnewX=3.0*x-2.0;%20newY=3.0*y-1.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-2.0,%203.0*z))%7BnewX=3.0*x-2.0;%20newY=3.0*y-2.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y-2.0,%203.0*z))%7BnewX=3.0*x-1.0;%20newY=3.0*y-2.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-2.0,%203.0*z-1.0))%7BnewX=3.0*x;%20newY=3.0*y-2.0;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-2.0,%203.0*z-2.0))%7BnewX=3.0*x;%20newY=3.0*y-2.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-1.0,%203.0*z-2.0))%7BnewX=3.0*x;%20newY=3.0*y-1.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y,%203.0*z-2.0))%7BnewX=3.0*x-1.0;%20newY=3.0*y;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y-2.0,%203.0*z-2.0))%7BnewX=3.0*x-1.0;%20newY=3.0*y-2.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-2.0,%203.0*z-2.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y-2.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-2.0,%203.0*z-1.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y-2.0;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-1.0,%203.0*z-2.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y-1.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y,%203.0*z-1.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y,%203.0*z-2.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%22,%22xCenter%22:0,%22yCenter%22:0.5,%22scaleRange%22:3,%22depthIter%22:3,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&z%3E0.&&x%3C1.&&y%3C1.&&z%3C1.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:3968,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D%5D%7D'
    },
    {
        name: 'Сеть (А)',
        src: 'img/fractals/fractal_screenshot_00060.png',
        link:'http://localhost:3000/painting/ifs3d#%7B%22typeFractal%22:%22ifs3d%22,%22name%22:%22if(areaCond(3.0*x-1.0,%203.0*y-1.0,%203.0*z))%7BnewX=3.0*x-1.0;%20newY=3.0*y-1.0;%20newZ=3.0*z;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y-1.0,%203.0*z-2.0))%7BnewX=3.0*x-1.0;%20newY=3.0*y-1.0;%20newZ=3.0*z-2.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x,%203.0*y-1.0,%203.0*z-1.0))%7BnewX=3.0*x;%20newY=3.0*y-1.0;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-2.0,%203.0*y-1.0,%203.0*z-1.0))%7BnewX=3.0*x-2.0;%20newY=3.0*y-1.0;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y-2.0,%203.0*z-1.0))%7BnewX=3.0*x-1.0;%20newY=3.0*y-2.0;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(3.0*x-1.0,%203.0*y,%203.0*z-1.0))%7BnewX=3.0*x-1.0;%20newY=3.0*y;%20newZ=3.0*z-1.0;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%22,%22xCenter%22:0,%22yCenter%22:0.5,%22scaleRange%22:3,%22depthIter%22:4,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&z%3E0.&&x%3C1.&&y%3C1.&&z%3C1.%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:4165,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D%5D%7D'
    },
    {
        name: 'Вихри - кватернионы (А)',
        src: 'img/fractals/fractal_screenshot_00061.png',
        link:'http://localhost:3000/painting/ifs3d#%7B%22typeFractal%22:%22ifs3d%22,%22name%22:%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20if(areaCond(x*x-y*y-z*z+cos(uTime),%202.0*x*y+sin(0.1*uTime),%202.0*x*z+sin(0.1*uTime)))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7BnewX=x*x-y*y-z*z+cos(uTime);%20newY=2.0*x*y+sin(0.1*uTime);%20newZ=2.0*x*z+sin(0.1*uTime);%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%22,%22xCenter%22:0,%22yCenter%22:0.5,%22scaleRange%22:6,%22depthIter%22:16,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x*x+y*y+z*z%3C2.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:4383,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D%5D%7D'
    },
    {
        name: 'Шар (А)',
        src: 'img/fractals/fractal_screenshot_00062.png',
        link:'http://localhost:3000/painting/ifs3d#%7B%22typeFractal%22:%22ifs3d%22,%22name%22:%22if(areaCond(z*z+y*y,%20z*z+x*x,%20x*x+y*y))%7BnewX=z*z+y*y;%20newY=z*z+x*x;%20newZ=x*x+y*y;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%5Cn%20%20%20%20%20%20%20%20if(areaCond(2.0*y*z,%202.0*z*x,%202.0*y*x))%7BnewX=2.0*y*z;%20newY=2.0*x*z;%20newZ=2.0*x*y;%20x=newX;%20y=newY;%20z=newZ;%20continue;%7D%22,%22xCenter%22:0,%22yCenter%22:0.5,%22scaleRange%22:6,%22depthIter%22:9,%22scaleXtoY%22:1.8057065217391304,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22x%3E0.&&y%3E0.&&z%3E0.&&x+y+z%3C1.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:4876,%22history%22:%5B%7B%22xCenter%22:0.5,%22yCenter%22:0.5,%22scaleRange%22:3%7D%5D%7D'
    },
    {
        name: 'Хвост (А)',
        src: 'img/fractals/fractal_screenshot_00020-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))*cos(0.2*uTime)+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))*sin(0.2*uTime)+ty;%22,%22xCenter%22:0.859,%22yCenter%22:-1.632,%22scaleRange%22:1.339,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20log(abs(sin(mod(float(i),3.0)*127.0)*1.7+1.0));g%20=%20log(abs(sin(mod(float(i)/3.0,3.0)*127.0)*1.7+1.0));b%20=%20log(abs(sin(mod(float(i)/9.0,3.0)*127.0)*1.7+1.0));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:58286,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.24,%22yCenter%22:1.2,%22scaleRange%22:38.1},{%22xCenter%22:0.211,%22yCenter%22:-2.343,%22scaleRange%22:6.972},{%22xCenter%22:0.859,%22yCenter%22:-1.632,%22scaleRange%22:1.339}]}',
    },
//    {
//        name: 'Растительность (А)',
//        src: 'img/fractals/fractal_screenshot_00027-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(1.0-x)*(exp(y)+exp(-y))/2.0+cos(0.2*uTime);%20newY=cos(1.0-x)*(exp(y)-exp(-y))/2.0+sin(0.2*uTime);%22,%22xCenter%22:1.463,%22yCenter%22:3.51,%22scaleRange%22:0.769,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20x*x+y*y+z*z;%20r%20=%201.0/abs(log(abs(x)/p));g%20=%201.0/abs(log(abs(y)/p));b%20=%201.0/abs(log(abs(z)/p));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:65543,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:9.433,%22yCenter%22:-0.859,%22scaleRange%22:7.68},{%22xCenter%22:0.473,%22yCenter%22:0.981,%22scaleRange%22:14},{%22xCenter%22:0.865,%22yCenter%22:3.543,%22scaleRange%22:4.746},{%22xCenter%22:1.463,%22yCenter%22:3.51,%22scaleRange%22:0.769}]}',
//    },
    {
        name: 'Цветок',
        src: 'img/fractals/fractal_screenshot_00024-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(1.0-x)*(exp(y)+exp(-y))/2.0;%20newY=cos(1.0-x)*(exp(y)-exp(-y))/2.0;%22,%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x-3.0)*abs(x*x/y/y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20tx*tx+ty*ty+z*z;%20r%20=%201.0-abs(x)/p;g%20=%201.0-abs(y)/p;b%20=%201.0-abs(z)/p;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:60500,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546}]}',
    },
    {
        name: 'Букеты',
        src: 'img/fractals/fractal_screenshot_00023-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=sin(1.0-x)*(exp(y)+exp(-y))/2.0;%20newY=cos(1.0-x)*(exp(y)-exp(-y))/2.0;%22,%22xCenter%22:4.24,%22yCenter%22:-5.5,%22scaleRange%22:9.3,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x-3.0)*abs(x*x/y/y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20log(abs(sin(mod(float(i),3.0)*127.0)*1.7+1.0));g%20=%20log(abs(sin(mod(float(i)/3.0,3.0)*127.0)*1.7+1.0));b%20=%20log(abs(sin(mod(float(i)/9.0,3.0)*127.0)*1.7+1.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:60500,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:4.24,%22yCenter%22:-6.54,%22scaleRange%22:9.3}]}',
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00030-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+tx;newY=%20y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+ty;%22,%22xCenter%22:-1.04,%22yCenter%22:0.449,%22scaleRange%22:0.003,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*PI/255.0));g%20=%201.0-abs(log(float(i)*PI/255.0*2.0));%20b%20=%201.0-abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:72531,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-13.34,%22yCenter%22:-3.42,%22scaleRange%22:12.3},{%22xCenter%22:-11.47,%22yCenter%22:-3.039,%22scaleRange%22:2.546},{%22xCenter%22:-4.69,%22yCenter%22:3.201,%22scaleRange%22:42.72},{%22xCenter%22:4.452,%22yCenter%22:4.184,%22scaleRange%22:6.536},{%22xCenter%22:4.158,%22yCenter%22:2.674,%22scaleRange%22:1.196},{%22xCenter%22:4.329,%22yCenter%22:2.945,%22scaleRange%22:0.142},{%22xCenter%22:4.334,%22yCenter%22:2.921,%22scaleRange%22:0.026},{%22xCenter%22:4.333,%22yCenter%22:2.921,%22scaleRange%22:0.005},{%22xCenter%22:-0.047,%22yCenter%22:0.101,%22scaleRange%22:7.98},{%22xCenter%22:-0.965,%22yCenter%22:0.62,%22scaleRange%22:1.764},{%22xCenter%22:-1.007,%22yCenter%22:0.414,%22scaleRange%22:0.127},{%22xCenter%22:-1.041,%22yCenter%22:0.447,%22scaleRange%22:0.013},{%22xCenter%22:-1.04,%22yCenter%22:0.449,%22scaleRange%22:0.003}]} ',
//    },
//    {
//        name: 'Жулиа (А)',
//        src: 'img/fractals/fractal_screenshot_00003-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=3.0*x+2.0*x*y+cos(uTime);%20newY=3.0*y-x*x+y*y+sin(uTime);%22,%22xCenter%22:-0.5,%22yCenter%22:-3,%22scaleRange%22:6,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%201.0-abs(log(float(i)*12.0/255.0));g%20=%201.0-abs(log(float(i)*6.0/255.0));%20b%20=%201.0-abs(log(float(i)*4.0/255.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:9760,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6}]}',
//    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00006-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0);%20newY=exp(3.0*x)*sin(3.0*y+1.0);%22,%22xCenter%22:1.766,%22yCenter%22:89.76,%22scaleRange%22:0.589,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x%20*%20x%20*%20fract(tx)%20*%20fract(tx)%20*%20cos(x)%20*%20y%20*%20y%20*%20fract(ty)%20*%20fract(ty)%20*%20cos(y))%20%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.13,%22yCenter%22:-0.186,%22scaleRange%22:1.164},{%22xCenter%22:0.184,%22yCenter%22:-0.186,%22scaleRange%22:2.016},{%22xCenter%22:7.2,%22yCenter%22:79.2,%22scaleRange%22:78.6},{%22xCenter%22:7.2,%22yCenter%22:79.2,%22scaleRange%22:78.6},{%22xCenter%22:5.628,%22yCenter%22:87.925,%22scaleRange%22:14.384},{%22xCenter%22:1.14,%22yCenter%22:90.14,%22scaleRange%22:3.351},{%22xCenter%22:1.599,%22yCenter%22:89.647,%22scaleRange%22:1.24},{%22xCenter%22:1.766,%22yCenter%22:89.76,%22scaleRange%22:0.589}]}',
//    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00007-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0);%20newY=exp(3.0*x)*sin(3.0*y+1.0);%22,%22xCenter%22:-0.257,%22yCenter%22:89.943,%22scaleRange%22:0.032,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x%20*%20x%20*%20fract(tx)%20*%20fract(tx)%20*%20cos(x)%20*%20y%20*%20y%20*%20fract(ty)%20*%20fract(ty)%20*%20cos(y))%20%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.13,%22yCenter%22:-0.186,%22scaleRange%22:1.164},{%22xCenter%22:0.184,%22yCenter%22:-0.186,%22scaleRange%22:2.016},{%22xCenter%22:7.2,%22yCenter%22:79.2,%22scaleRange%22:78.6},{%22xCenter%22:7.2,%22yCenter%22:79.2,%22scaleRange%22:78.6},{%22xCenter%22:5.628,%22yCenter%22:87.925,%22scaleRange%22:14.384},{%22xCenter%22:-0.269,%22yCenter%22:89.968,%22scaleRange%22:0.806},{%22xCenter%22:-0.256,%22yCenter%22:89.957,%22scaleRange%22:0.217},{%22xCenter%22:-0.257,%22yCenter%22:89.943,%22scaleRange%22:0.032}]}',
//    },
//    {
//        name: 'Обои-1',
//        src: 'img/fractals/fractal_screenshot_00008-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0);%20newY=exp(3.0*x)*sin(3.0*y+1.0);%22,%22xCenter%22:0.189,%22yCenter%22:2.215,%22scaleRange%22:0.075,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.04,%22yCenter%22:0.528,%22scaleRange%22:0.804},{%22xCenter%22:-5.96,%22yCenter%22:-5.472,%22scaleRange%22:654},{%22xCenter%22:1.888,%22yCenter%22:-7.434,%22scaleRange%22:84.366},{%22xCenter%22:-0.559,%22yCenter%22:-0.432,%22scaleRange%22:9.871},{%22xCenter%22:0.171,%22yCenter%22:2.46,%22scaleRange%22:1.974},{%22xCenter%22:0.135,%22yCenter%22:2.16,%22scaleRange%22:0.243},{%22xCenter%22:0.189,%22yCenter%22:2.215,%22scaleRange%22:0.075}]}',
//    },
//    {
//        name: 'Обои-2',
//        src: 'img/fractals/fractal_screenshot_00009-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0);%20newY=exp(3.0*x)*sin(3.0*y+1.0);%22,%22xCenter%22:-0.251,%22yCenter%22:0.717,%22scaleRange%22:0.207,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:25288,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.04,%22yCenter%22:0.528,%22scaleRange%22:0.804},{%22xCenter%22:-5.96,%22yCenter%22:-5.472,%22scaleRange%22:654},{%22xCenter%22:1.888,%22yCenter%22:-7.434,%22scaleRange%22:84.366},{%22xCenter%22:-0.39,%22yCenter%22:0.159,%22scaleRange%22:12.992},{%22xCenter%22:-0.247,%22yCenter%22:0.848,%22scaleRange%22:0.883},{%22xCenter%22:-0.251,%22yCenter%22:0.717,%22scaleRange%22:0.207}]}',
//    },
    {
        name: 'Кактусы (А)',
        src: 'img/fractals/fractal_screenshot_00012-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*cos(3.0*y+1.0)+tx+cos(uTime);%20newY=exp(3.0*x)*sin(3.0*y+1.0)+ty+sin(uTime);%22,%22xCenter%22:0.875,%22yCenter%22:1.033,%22scaleRange%22:7,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20x*x+y*y+z*z;%20r%20=%201.0/abs(log(abs(x)/p));g%20=%201.0/abs(log(abs(y)/p));b%20=%201.0/abs(log(abs(z)/p));%22,%22speedColorStyle%22:1,%22animated%22:true,%22startTime%22:28000,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.25,%22yCenter%22:-2.45,%22scaleRange%22:37.45},{%22xCenter%22:0.875,%22yCenter%22:1.033,%22scaleRange%22:7.752}]}',
    },
    {
        name: 'Летучие мыши',
        src: 'img/fractals/fractal_screenshot_00015-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0));%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0));%22,%22xCenter%22:0.334,%22yCenter%22:2.31,%22scaleRange%22:0.738,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20abs(sin(pow(abs(mod(float(i*i),3.0)*127.0),abs(ty*tx))));g%20=%20abs(sin(pow(abs(mod(float(i*2*i)/3.0,3.0)*127.0),abs(ty*tx))));b%20=%20abs(sin(pow(abs(mod(float(i*3*i)/9.0,3.0)*127.0),abs(ty*tx))));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:56529,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:0.334,%22yCenter%22:2.31,%22scaleRange%22:0.738}]}',
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00022-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=cos(x)*(exp(y)+exp(-y))/2.-0.02;newY=-sin(x)*(exp(y)-exp(-y))/2.-0.02;%22,%22xCenter%22:15.168,%22yCenter%22:-2.893,%22scaleRange%22:0.022,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22float%20p%20=%20x*x+y*y+z*z;%20r%20=%201.0/abs(log(abs(x)/p));g%20=%201.0/abs(log(abs(y)/p));b%20=%201.0/abs(log(abs(z)/p));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:60500,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:11.5,%22yCenter%22:-0.78,%22scaleRange%22:18.12},{%22xCenter%22:14.29,%22yCenter%22:-3.081,%22scaleRange%22:2.428},{%22xCenter%22:15.101,%22yCenter%22:-3.008,%22scaleRange%22:0.833},{%22xCenter%22:15.143,%22yCenter%22:-2.93,%22scaleRange%22:0.215},{%22xCenter%22:15.17,%22yCenter%22:-2.892,%22scaleRange%22:0.064},{%22xCenter%22:15.168,%22yCenter%22:-2.893,%22scaleRange%22:0.022}]}',
//    },
    {
        name: 'Треки совы',
        src: 'img/fractals/fractal_screenshot_00038-min.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=log(abs(x))/(x*x+y*y)+tx;%20newY=log(abs(y))/(x*x+y*y)+ty;%22,%22xCenter%22:0.014,%22yCenter%22:0.509,%22scaleRange%22:4.04,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x%20*%20x%20*%20fract(tx)%20*%20fract(tx)%20*%20cos(x)%20*%20y%20*%20y%20*%20fract(ty)%20*%20fract(ty)%20*%20cos(y))%20%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:66844,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.5,%22yCenter%22:-1.2,%22scaleRange%22:50.4},{%22xCenter%22:-0.097,%22yCenter%22:-0.343,%22scaleRange%22:9.425},{%22xCenter%22:0.054,%22yCenter%22:-0.371,%22scaleRange%22:3.779},{%22xCenter%22:0.014,%22yCenter%22:0.509,%22scaleRange%22:4.04}]}',
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00001-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x/(x*x+y*y)+tx*tx*tx*tx;%20newY=y/(x*x+y*y)+ty*ty*ty*ty;%22,%22xCenter%22:-0.386,%22yCenter%22:-0.68,%22scaleRange%22:3.377,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:5439,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:4.3,%22yCenter%22:-3,%22scaleRange%22:88.8},{%22xCenter%22:0.393,%22yCenter%22:-0.247,%22scaleRange%22:17.316},{%22xCenter%22:-0.386,%22yCenter%22:-0.68,%22scaleRange%22:3.377}]}',
//    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00048.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=x;%20newY=y;if(mod(float(i),2.0)==0.0){newX=(x*x-y*y+sin(uTime))/(x*x+y*y);newY=(2.0*x*y+sin(uTime))/(x*x+y*y);}else{newY=(x*x-y*y+sin(uTime))/(x*x+y*y);newX=(2.0*x*y+sin(uTime))/(x*x+y*y);};%22,%22xCenter%22:-0.8,%22yCenter%22:1.5,%22scaleRange%22:12,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(tx*tx*tx/x+ty*ty*ty/y)%3E%20100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:10101,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:-0.8,%22yCenter%22:1.5,%22scaleRange%22:12.72}]}'
//    },
    {
        name: 'Функции пример-1',
        src: 'img/fractals/fractal_screenshot_00051.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=prevX;%20newY=prevY;%22,%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:60,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(ty-abs(abs(abs(abs(tx-1.)-5.)-10.)*sin(2.*tx)))%3E.1%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:74049,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6}]}'
    },
    {
        name: 'Функции пример-2',
        src: 'img/fractals/fractal_screenshot_00052.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=prevX;%20newY=prevY;%22,%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:60,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(ty-sin(tx))%3E0.1%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:74049,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6}]}'
    },
    {
        name: 'Область пример-1',
        src: 'img/fractals/fractal_screenshot_00053.png',
        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=prevX;%20newY=prevY;%22,%22xCenter%22:-0.5,%22yCenter%22:4,%22scaleRange%22:60,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22abs(ty)%3C2.||ty*ty+tx*tx%3C50.||(abs(ty)%3E1.*tx&&abs(ty)%3C2.*tx)||(abs(ty)%3E-1.*tx&&abs(ty)%3C-2.*tx)%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r=r;g=g;%20b=b;if(abs(ty)%3C2.||ty*ty+tx*tx%3C50.){r=250.;}if((abs(ty)%3E1.*tx&&abs(ty)%3C2.*tx)||(abs(ty)%3E-1.*tx&&abs(ty)%3C-2.*tx)){r=250.;g=250.;};%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:74049,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6}]} '
    },
//    {
//        name: '',
//        src: 'img/fractals/fractal_screenshot_00019-min.png',
//        link:'http://localhost:3000/painting/complex#{%22name%22:%22newX=exp(3.0*x)*abs(cos(3.0*y+1.0))+tx;%20newY=exp(3.0*x)*abs(sin(3.0*y+1.0))+ty;%22,%22xCenter%22:-0.446,%22yCenter%22:-2.278,%22scaleRange%22:0.005,%22scaleXtoY%22:1.8522920203735145,%22scaleMode%22:0,%22scaleMotion%22:0,%22speedScaleMotion%22:1,%22norm%22:%22(x*x*y*y)%3E100.0%22,%22speedNorm%22:1,%22motion%22:%22;%22,%22speedMotion%22:1,%22colorStyle%22:%22r%20=%20log(abs(sin(mod(float(i),3.0)*127.0)*1.7+1.0));g%20=%20log(abs(sin(mod(float(i)/3.0,3.0)*127.0)*1.7+1.0));b%20=%20log(abs(sin(mod(float(i)/9.0,3.0)*127.0)*1.7+1.0));%22,%22speedColorStyle%22:1,%22animated%22:false,%22startTime%22:56529,%22history%22:[{%22xCenter%22:-0.5,%22yCenter%22:0,%22scaleRange%22:6},{%22xCenter%22:1.24,%22yCenter%22:1.2,%22scaleRange%22:38.1},{%22xCenter%22:0.211,%22yCenter%22:-2.343,%22scaleRange%22:6.972},{%22xCenter%22:-0.186,%22yCenter%22:-2.064,%22scaleRange%22:0.948},{%22xCenter%22:-0.422,%22yCenter%22:-2.311,%22scaleRange%22:0.175},{%22xCenter%22:-0.447,%22yCenter%22:-2.281,%22scaleRange%22:0.039},{%22xCenter%22:-0.449,%22yCenter%22:-2.277,%22scaleRange%22:0.016},{%22xCenter%22:-0.446,%22yCenter%22:-2.278,%22scaleRange%22:0.005}]}',
//    },
]