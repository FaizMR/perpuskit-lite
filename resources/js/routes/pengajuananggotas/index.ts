import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::index
 * @see app/Http/Controllers/Anggota/MyrequestController.php:21
 * @route '/pengajuananggotas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pengajuananggotas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::index
 * @see app/Http/Controllers/Anggota/MyrequestController.php:21
 * @route '/pengajuananggotas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::index
 * @see app/Http/Controllers/Anggota/MyrequestController.php:21
 * @route '/pengajuananggotas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::index
 * @see app/Http/Controllers/Anggota/MyrequestController.php:21
 * @route '/pengajuananggotas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::create
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pengajuananggotas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::create
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::create
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::create
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::store
 * @see app/Http/Controllers/Anggota/MyrequestController.php:40
 * @route '/pengajuananggotas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pengajuananggotas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::store
 * @see app/Http/Controllers/Anggota/MyrequestController.php:40
 * @route '/pengajuananggotas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::store
 * @see app/Http/Controllers/Anggota/MyrequestController.php:40
 * @route '/pengajuananggotas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::show
 * @see app/Http/Controllers/Anggota/MyrequestController.php:54
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
export const show = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pengajuananggotas/{pengajuananggota}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::show
 * @see app/Http/Controllers/Anggota/MyrequestController.php:54
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
show.url = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuananggota: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengajuananggota: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengajuananggota: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuananggota: typeof args.pengajuananggota === 'object'
                ? args.pengajuananggota.id
                : args.pengajuananggota,
                }

    return show.definition.url
            .replace('{pengajuananggota}', parsedArgs.pengajuananggota.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::show
 * @see app/Http/Controllers/Anggota/MyrequestController.php:54
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
show.get = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::show
 * @see app/Http/Controllers/Anggota/MyrequestController.php:54
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
show.head = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::edit
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}/edit'
 */
export const edit = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pengajuananggotas/{pengajuananggota}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::edit
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}/edit'
 */
edit.url = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuananggota: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengajuananggota: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuananggota: args.pengajuananggota,
                }

    return edit.definition.url
            .replace('{pengajuananggota}', parsedArgs.pengajuananggota.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::edit
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}/edit'
 */
edit.get = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::edit
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}/edit'
 */
edit.head = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::update
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
export const update = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/pengajuananggotas/{pengajuananggota}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::update
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
update.url = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuananggota: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengajuananggota: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuananggota: args.pengajuananggota,
                }

    return update.definition.url
            .replace('{pengajuananggota}', parsedArgs.pengajuananggota.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::update
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
update.put = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Anggota\MyrequestController::update
 * @see app/Http/Controllers/Anggota/MyrequestController.php:0
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
update.patch = (args: { pengajuananggota: string | number } | [pengajuananggota: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::destroy
 * @see app/Http/Controllers/Anggota/MyrequestController.php:61
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
export const destroy = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pengajuananggotas/{pengajuananggota}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::destroy
 * @see app/Http/Controllers/Anggota/MyrequestController.php:61
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
destroy.url = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengajuananggota: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengajuananggota: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengajuananggota: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengajuananggota: typeof args.pengajuananggota === 'object'
                ? args.pengajuananggota.id
                : args.pengajuananggota,
                }

    return destroy.definition.url
            .replace('{pengajuananggota}', parsedArgs.pengajuananggota.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\MyrequestController::destroy
 * @see app/Http/Controllers/Anggota/MyrequestController.php:61
 * @route '/pengajuananggotas/{pengajuananggota}'
 */
destroy.delete = (args: { pengajuananggota: number | { id: number } } | [pengajuananggota: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const pengajuananggotas = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pengajuananggotas