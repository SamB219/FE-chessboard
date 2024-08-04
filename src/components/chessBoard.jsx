import React from 'react';

const ranks = Array(8).fill().map((_, i) => 8 - i);
const files = Array(8).fill().map((_, i) => String.fromCharCode(i + 97));

function ChessBoard() {
    return (
        <div className="board">
            <div className="tiles">
                {ranks.map((rank, i) =>
                    files.map((file, j) => (
                        <div key={`${file}${rank}`} className={`tile ${(i + j) % 2 === 0 ? 'light' : 'dark'}`}>
                            {/* File labels at the bottom */}
                            {rank === 1 && (
                                <div className="file-label">{file}</div>
                            )}
                            {/* Rank labels on the right */}
                            {file === 'h' && (
                                <div className="rank-label">{rank}</div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ChessBoard;
