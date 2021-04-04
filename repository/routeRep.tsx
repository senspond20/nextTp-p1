interface RouteProp {
    id : number
    path : string
    as : string
    name : string
}

export const RouteData : RouteProp[] = [
    { id : 1, path:'/', as : '/', name :'Home'},
    { id : 2, path:'/posts', as : '/posts', name :'Posts'},
    { id : 3, path:'/about', as : '/about', name :'About'},
]