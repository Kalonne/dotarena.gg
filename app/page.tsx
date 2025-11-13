'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchHeroes } from '@/lib/api/opendota';

export default function Home() {
    const [heroes, setHeroes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadHeroes = async () => {
            try {
                const data = await fetchHeroes();
                setHeroes(data.slice(0, 12));
            } catch (error) {
                console.error('Error loading heroes:', error);
            } finally {
                setLoading(false);
            }
        };

        loadHeroes();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <section className="text-center py-20 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400">🎮 DotArena.gg</h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">Твой личный ассистент в Dota 2</p>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">Получай рекомендации по контрпикам, стройте оптимальные билды и изучай карту вардинга</p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link href="/counterpicker" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold">Контрпикер</Link>
                    <Link href="/map" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold">Карта вардинга</Link>
                    <Link href="/builds" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-bold">Билды</Link>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Популярные герои</h2>
                {loading ? (
                    <div className="text-center text-2xl text-gray-400">Загружаю героев...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {heroes.map((hero) => (
                            <Link key={hero.id} href={`/hero/${hero.id}`}>  
                                <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition transform hover:scale-105">  
                                    <div className="bg-gradient-to-r from-red-600 to-orange-600 h-32 flex items-center justify-center"><span className="text-6xl">⚔️</span></div>  
                                    <div className="p-4">  
                                        <h3 className="text-xl font-bold text-yellow-300">{hero.localized_name || hero.name}</h3>  
                                        <p className="text-gray-400 text-sm">Роли: {hero.roles?.join(", ")}</p>  
                                    </div>  
                                </div>  
                            </Link>  
                        ))}  
                    </div>
                )}  
            </section>
        </main>
    );
}