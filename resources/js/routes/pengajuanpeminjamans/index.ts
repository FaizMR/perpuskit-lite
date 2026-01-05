import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::index
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:20
 * @route '/pengajuanpeminjamans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pengajuanpeminjamans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::index
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:20
 * @route '/pengajuanpeminjamans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::index
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:20
 * @route '/pengajuanpeminjamans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::index
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:20
 * @route '/pengajuanpeminjamans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::create
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:38
 * @route '/pengajuanpeminjamans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pengajuanpeminjamans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::create
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:38
 * @route '/pengajuanpeminjamans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::create
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:38
 * @route '/pengajuanpeminjamans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::create
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:38
 * @route '/pengajuanpeminjamans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::store
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:46
 * @route '/pengajuanpeminjamans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pengajuanpeminjamans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::store
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:46
 * @route '/pengajuanpeminjamans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::store
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:46
 * @route '/pengajuanpeminjamans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::show
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:64
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
export const show = (args: { pengajuanpeminjaman: number | { id: number } } | [pengajuanpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pengajuanpeminjamans/{pengajuanpeminjaman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::show
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:64
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
show.url = (args: { pengajuanpeminjaman: number | { id: number } } | [pengajuanpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuanpeminjaman: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengajuanpeminjaman: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengajuanpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuanpeminjaman: typeof args.pengajuanpeminjaman === 'object'
                ? args.pengajuanpeminjaman.id
                : args.pengajuanpeminjaman,
                }

    return show.definition.url
            .replace('{pengajuanpeminjaman}', parsedArgs.pengajuanpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::show
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:64
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
show.get = (args: { pengajuanpeminjaman: number | { id: number } } | [pengajuanpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::show
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:64
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
show.head = (args: { pengajuanpeminjaman: number | { id: number } } | [pengajuanpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::edit
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:75
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}/edit'
 */
export const edit = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pengajuanpeminjamans/{pengajuanpeminjaman}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::edit
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:75
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}/edit'
 */
edit.url = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuanpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengajuanpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuanpeminjaman: args.pengajuanpeminjaman,
                }

    return edit.definition.url
            .replace('{pengajuanpeminjaman}', parsedArgs.pengajuanpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::edit
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:75
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}/edit'
 */
edit.get = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::edit
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:75
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}/edit'
 */
edit.head = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::update
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:83
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
export const update = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/pengajuanpeminjamans/{pengajuanpeminjaman}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::update
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:83
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
update.url = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuanpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengajuanpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuanpeminjaman: args.pengajuanpeminjaman,
                }

    return update.definition.url
            .replace('{pengajuanpeminjaman}', parsedArgs.pengajuanpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::update
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:83
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
update.put = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\petugas\LoanRequestController::update
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:83
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
update.patch = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::destroy
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:91
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
export const destroy = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pengajuanpeminjamans/{pengajuanpeminjaman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::destroy
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:91
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
destroy.url = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuanpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengajuanpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuanpeminjaman: args.pengajuanpeminjaman,
                }

    return destroy.definition.url
            .replace('{pengajuanpeminjaman}', parsedArgs.pengajuanpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\petugas\LoanRequestController::destroy
 * @see app/Http/Controllers/Petugas/LoanRequestController.php:91
 * @route '/pengajuanpeminjamans/{pengajuanpeminjaman}'
 */
destroy.delete = (args: { pengajuanpeminjaman: string | number } | [pengajuanpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const pengajuanpeminjamans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pengajuanpeminjamans