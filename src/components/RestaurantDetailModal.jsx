import styles from './RestaurantDetailModal.module.css'

export default function RestaurantDetailModal() {
    return (
        <>
            <div className={`${styles.modal} ${styles.modalOpen}`}>
                <div className={styles.modalBackdrop}></div>
                <div className={styles.modalContainer}>
                    <h2 className={`${styles.modalTitle} text-title`}>음식점 이름</h2>
                    <div className={styles.restaurantInfo}>
                        <p className={`restaurant-info__description text-body`}>음식점 소개 문구</p>
                    </div>
                    {/*닫기 버튼*/}
                    <div className="button-container">
                        <button className="button button--primary text-caption">닫기</button>
                    </div>
                </div>
            </div>
        </>
    );
}
